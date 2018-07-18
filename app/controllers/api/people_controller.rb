class Api::PeopleController < Api::BaseController
	def index
		@people = Person.all

		respond_to do |format|
			format.json { render json: @people }
		end
    end

    def create
        
    end

    def destroy
        
    end

    def update
        
    end
    
    

end
