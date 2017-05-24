class ContactMailer < ApplicationMailer
	default from: "default@gmail.com"
	def send_mail(user)
		@user = user
		mail(to:@user["email"],subject: 'Thank you. we will contact u soon')
	end
	def enrolment_mail(user)
		@user = user
		mail(to:@user["email"],subject:"enrolment mail")
	end
end
