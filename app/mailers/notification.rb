class Notification < ActionMailer::Base
  default from: 'notifications@sweatnet.com'
  def welcome_email(subscription)
      @subscription = subscription
      @url  = 'http://example.com/login'
      mail(to: @subscription.email+", rachel@sweatnet.com", subject: 'You will get some news')
  end
end
