class Api::SubscriptionsController < ApplicationController
  def create
    @subscription = Subscription.new(subscription_params)
    res = @subscription.save
    render_result(res)
  end
  
  def subscription_params
    params.require(:subscription).permit(:email)
  end
  
  def render_result(res)
    if res
      Notification.welcome_email(@subscription).deliver
      render json: {
        success: true,
       subscription:  @subscription.as_json()
      }, status: 201
      return
    else
      render json: {
        success: false,
        errors:  @subscription.errors
      }, status: 201
      return
    end
  end 
end
