class ValuesController < ApplicationController
  def index
    @values = Value.all
  end

  def show
    @value = Value.find(params[:id])
  end
end
