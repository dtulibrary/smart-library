class ValuesController < ApplicationController
  def index
    @values = Value.all
  end
end
