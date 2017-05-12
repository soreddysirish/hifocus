class SendmailsController < ApplicationController
	def mailing
		res = ContactMailer.send_mail(params).deliver
		if res.errors.length == 0 && res.error_status == nil
			render json: { status: :ok,status_code:200}
		else
			render json: { status: :fail}
		end
	end
end
