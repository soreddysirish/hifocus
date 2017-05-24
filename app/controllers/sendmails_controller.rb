# require 'twilio-ruby'
class SendmailsController < ApplicationController
	def mailing
		res = ContactMailer.send_mail(params).deliver
		# binding.pry
		# easy = SMSEasy::Client.new

		# # Deliver a simple message.
		# easy.deliver("9949999818", "verizon", "Hey!")  
		# begin
		# 	account_sid = "AC84db1ea0d36a5f3db797ed90e3a02b45"
		# 	auth_token = "87b9a13cb1ef7bacfbb41396e9c161a1"
		# 	@client = Twilio::REST::Client.new account_sid, auth_token
		# 	message = @client.account.messages.create(:body => "Hello from Ruby",
		# 		:to => "+918553484384",
		# 		:from => "+16158007884") 
		# rescue Twilio::REST::RequestError => e
		# 	puts e.message
		# end
		if res.errors.length == 0 && res.error_status == nil
			render json: { status: :ok,status_code:200}
		else
			render json: { status: :fail}
		end
	end
	def enrollment 
		res =ContactMailer.enrolment_mail(params).deliver
		if res.errors.length == 0 && res.error_status == nil
			render json: { status: :ok,status_code:200}
		else
			render json: { status: :fail}
		end
	end
end
