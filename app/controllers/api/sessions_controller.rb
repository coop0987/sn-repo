class Api::SessionsController < Devise::SessionsController
  after_filter :set_csrf_header, only: [:new, :create]

 
  
  def create
    resource = User.find_for_database_authentication(
      email: params[:user][:email]
    ) 
        
    return invalid_login_attempt unless resource

    if resource.valid_password?(params[:user][:password])
      sign_in("user", resource)
      render json: {
        success: true,
        auth_token: resource.authentication_token,
        email: resource.email
      }
      return
    end
    invalid_login_attempt
  end

  def destroy
    sign_out(resource_name)
  end

  protected

  def set_csrf_header
     response.headers['X-CSRF-Token'] = form_authenticity_token
  end
    def ensure_params_exist
      return unless params[:user].blank?
      render json: {
        success: false,
        message: "missing user parameter"
      }, status: 422
    end

    def invalid_login_attempt
      warden.custom_failure!
      render json: {
        success: false,
        message: "Error with your login or password"
      }, status: 401
    end
end