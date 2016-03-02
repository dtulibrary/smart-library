class ValuesController < ApplicationController

  before_filter :params_to_int

  def index
    if params[:minutes]
      @values = Value.find_last(params[:minutes])
    else
      @values = Value.all
    end
  end

  def show
    @value = Value.find(params[:id])
  end

  def params_to_int
    if params[:minutes]
      params[:minutes] = params[:minutes].to_i
    end
  end
end
