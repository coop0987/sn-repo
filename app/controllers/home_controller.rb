class HomeController < ApplicationController
  layout 'spa'
  before_filter :authenticate_user!
  def index
  end
end
