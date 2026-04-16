import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Innovative Investment Professionals",
  description:
    "Privacy policy for Innovative Investment Professionals — how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div>
      <section className="page-hero pt-44 pb-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-label text-[rgba(255,255,255,0.7)] mb-4">Legal</p>
          <h1 className="hero-title text-white leading-tight">Privacy Policy</h1>
          <p className="text-body-lg text-[rgba(255,255,255,0.75)] mt-6 leading-snug">
            How we collect, use, and protect your personal information.
          </p>
        </div>
      </section>

      <section className="section-border py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-8 text-body fv-body body-text leading-relaxed">

          <div>
            <h2 className="section-title mb-4">Who we are</h2>
            <p>Our website address is: <a href="https://innovativeinvpro.com" className="footer-legal-link">https://innovativeinvpro.com</a>.</p>
          </div>

          <div>
            <h2 className="section-title mb-4">Privacy Statement</h2>
            <p className="mb-4">
              Your privacy is important to us. We are committed to protecting the privacy of the information you share with us when you access and use our website, applications, products, events, services and other offerings. This policy describes how we collect, use and share the personally identifiable information you provide to us when you use our web site, register or contact us.
            </p>
            <p className="mb-4">
              Our goal is to treat the personal information you furnish us with the utmost respect and in accordance with this Privacy Policy. We request that you carefully read this Privacy Policy before using the website. By visiting, viewing or using the website in any manner you are agreeing to the terms set forth in this Privacy Policy.
            </p>
            <p className="text-sm font-semibold">
              BY USING OR ACCESSING THE SERVICES IN ANY MANNER, YOU ACKNOWLEDGE THAT YOU ACCEPT THE PRACTICES AND POLICIES OUTLINED IN THIS PRIVACY POLICY, AND YOU HEREBY CONSENT THAT WE WILL COLLECT, USE, AND SHARE YOUR INFORMATION IN THE WAYS DELINEATED HEREIN. IF YOU DO NOT AGREE WITH THIS PRIVACY POLICY, YOU MAY NOT USE THE SERVICES. IF YOU USE THE SERVICES ON BEHALF OF SOMEONE ELSE (SUCH AS YOUR CHILD) OR AN ENTITY (SUCH AS YOUR EMPLOYER), YOU REPRESENT THAT YOU ARE AUTHORIZED BY SUCH INDIVIDUAL OR ENTITY TO ACCEPT THIS PRIVACY POLICY ON SUCH INDIVIDUAL&rsquo;S OR ENTITY&rsquo;S BEHALF.
            </p>
          </div>

          <div>
            <h2 className="section-title mb-4">How We Use Your Information</h2>
            <p className="mb-4">
              We use the collected information for the following purposes: to provide and manage our services, to send you related and requested information, to communicate with you, including responding to your questions and requests, and to send you updates, event and appointment reminders.
            </p>
            <p className="mb-4">
              We do not sell, trade or share your personal information. The phone numbers collected for SMS consent will not be shared with third parties or affiliates for marketing purposes.
            </p>
            <p>
              This may include emails and text messages inviting you to educational or appreciation events and reminders of appointments. You may opt out of this anytime by replying STOP to the text message or unsubscribing from the link at the bottom of the email.
            </p>
          </div>

          <div>
            <h2 className="section-title mb-4">The Information We Collect</h2>
            <p className="mb-4">
              We may collect the following types of information: Names, address, phone number, email address, and other information you provide during registration.
            </p>
            <p className="mb-4">
              We may collect certain non-personally identifiable information when you visit our web pages or use our applications. Information about your computer hardware and software may be automatically collected by us. This information can include: your IP address, browser type, domain names, access times and referring Web site addresses. This information is used by us for the operation of the service, to maintain quality of the service, and to provide general statistics regarding use of our Website.
            </p>
            <p className="mb-6">
              There are times when we may ask you for information about yourself to assist us in meeting your various needs, including providing you with products or services you have requested, improving our services, developing and/or informing you of additional products or services that may be of interest.
            </p>

            <h3 className="text-card-h fv-body-semi font-semibold text-ink mb-4">Categories of Personal Data We Collect</h3>
            <div className="space-y-6">
              {[
                {
                  title: "Device/IP Information",
                  examples: ["IP address", "Device ID", "Domain server", "Type of device/operating system/browser used to access the Services"],
                  source: "You, Third Parties",
                  shared: "Service Providers, Third-Party Business Partners You Access Through the Services",
                },
                {
                  title: "Web Analytics",
                  examples: ["Web page interactions", "Referring webpage/source through which you access the Services", "Non-identifiable request IDs", "Statistics associated with the interaction between device or browser and the Services"],
                  source: "You, Third Parties",
                  shared: "Service Providers, Third-Party Business Partners You Access Through the Services",
                },
                {
                  title: "Geolocation Data",
                  examples: [],
                  source: "You, Third Parties",
                  shared: "Service Providers, Third-Party Business Partners You Access Through the Services",
                },
                {
                  title: "Other Identifying Information You Voluntarily Provide",
                  examples: ["Unique identifiers such as usernames", "Personal data in emails or letters you send to us"],
                  source: "You",
                  shared: "Service Providers",
                },
                {
                  title: "Consumer Contact Data",
                  examples: ["First and last name", "E-mail", "Mobile phone number — Innovative Investment Professionals will never sell or share your information with a 3rd party", "Mailing address"],
                  source: "You",
                  shared: "Service Providers, Carriers, Insurance Providers, Parties You Authorize, Access or Authenticate. Innovative Investment Professionals will never sell or share your data with a third party for any kind of marketing that is outside of the marketing we do.",
                },
                {
                  title: "Consumer Demographic Data",
                  examples: ["Gender", "Age", "Date of birth", "Zip Code", "Race", "Ethnicity"],
                  source: "You",
                  shared: "Service Providers, Carriers, Parties You Authorize, Access or Authenticate. Innovative Investment Professionals will never sell or share your data with a third party for marketing outside of our own.",
                },
                {
                  title: "Insurance Information",
                  examples: ["Insurance carrier", "Insurance plan"],
                  source: "You",
                  shared: "Service Providers, Parties You Authorize, Access or Authenticate",
                },
                {
                  title: "Social Network Data",
                  examples: ["E-mail", "Phone number", "Username", "IP address", "Device ID"],
                  source: "You, Third Parties",
                  shared: "Service Providers, Carriers, Parties You Authorize, Access or Authenticate. Innovative Investment Professionals will never sell or share your data with a third party for marketing outside of our own.",
                },
              ].map(({ title, examples, source, shared }) => (
                <div key={title} className="bg-bg2 rounded-xl p-6">
                  <p className="font-semibold text-ink mb-2">{title}</p>
                  {examples.length > 0 && (
                    <>
                      <p className="text-sm text-ink2 mb-1">Examples:</p>
                      <ul className="list-disc list-inside text-sm space-y-0.5 mb-2">
                        {examples.map((e) => <li key={e}>{e}</li>)}
                      </ul>
                    </>
                  )}
                  <p className="text-sm text-ink2"><span className="font-medium">Source:</span> {source}</p>
                  <p className="text-sm text-ink2 mt-1"><span className="font-medium">Shared with:</span> {shared}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="section-title mb-4">How We Share Your Personal Data</h2>
            <p className="mb-4">
              In certain circumstances, we may share your Personal Data with the following categories of service providers and other third parties:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>Security and Fraud Prevention Consultants</li>
              <li>Hosting, Technology and Communications Providers; Fulfillment Providers; Data Storage Providers; Analytics Providers; Insurance Verification Providers; Staff Augmentation Personnel</li>
              <li>Ad Networks</li>
              <li>Carriers and Insurance Providers</li>
              <li>Third-Party Business Partners You Access Through the Services</li>
            </ul>
            <p>
              Please note that you may visit the public portion of our website without telling us who you are or revealing any information about yourself. Our web servers collect the name of the IP address used to access the Internet and the website you came from and visit next. This information is used to measure visits, average time spent, page views, and other general statistics.
            </p>
          </div>

          <div>
            <h2 className="section-title mb-4">Tracking Tools, Advertising and Opt-Out</h2>
            <p className="mb-4">
              To enhance your online experience we use cookies — text files we place in your computer&rsquo;s browser to store preferences. Cookies enable our servers to recognize your web browser and tell us how and when you visit and use our Services. Cookies, by themselves, do not tell us your e-mail address or other personally identifiable information unless you choose to provide this information to us.
            </p>
            <p className="mb-4">We use the following types of Cookies:</p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li><span className="font-semibold">Essential Cookies</span> — required for providing features or services you have requested.</li>
              <li><span className="font-semibold">Functional Cookies</span> — record your choices and settings, maintain your preferences over time and recognize you when you return.</li>
              <li><span className="font-semibold">Performance/Analytical Cookies</span> — help us understand how visitors use our Services, including page views, how long visitors stay, and other usage metrics.</li>
              <li><span className="font-semibold">Mobile Device Identifiers</span> — help us learn more about our users&rsquo; demographics and internet behaviors.</li>
            </ul>
            <p className="mb-4">
              You can decide whether or not to accept Cookies through your internet browser&rsquo;s settings. Most browsers have an option for turning off the Cookie feature. Although you are not required to accept our Cookies, if you block, reject, or delete them, some Services and functionalities may not work.
            </p>
            <p>
              Your browser may offer you a &ldquo;Do Not Track&rdquo; option. Please note that our Services, like many website operators, do not currently support &ldquo;Do Not Track&rdquo; requests.
            </p>
          </div>

          <div>
            <h2 className="section-title mb-4">Our Commitment to Security</h2>
            <p className="mb-4">
              The security of your Personal Data is important to us. We have put in place appropriate physical, electronic and managerial procedures to safeguard and help prevent unauthorized access, maintain data security and correctly use the information we collect.
            </p>
            <p className="mb-4">
              We seek to protect your Personal Data from unauthorized access, use and disclosure using appropriate physical, technical, organizational and administrative security measures. The Services use industry standard Secure Sockets Layer (SSL) technology to allow for the encryption of Personal Data. All data on stored and backup media are encrypted via TLS encryption protocols.
            </p>
            <p>
              Please be aware that no method of transmitting data over the Internet or storing data is completely secure. We cannot guarantee the complete security of any data you share with us, and except as expressly required by law, we are not responsible for the theft, destruction, loss or inadvertent disclosure of your information.
            </p>
          </div>

          <div>
            <h2 className="section-title mb-4">Collection of Information by Third-Party Sites</h2>
            <p>
              Sometimes our site may contain links to other sites whose information practices may be different than ours. You should consult the other sites&rsquo; privacy notices, as we have no control over information that is submitted to, or collected by, these third parties.
            </p>
          </div>

          <div>
            <h2 className="section-title mb-4">Controlling Your Personal Data</h2>
            <p className="mb-4">
              If you are a registered user of the Services, you can modify certain Personal Data or account information by logging in and accessing your account. If you wish to close your account, please email us at the address found on the home page of this website.
            </p>
            <p>You must promptly notify us if any of your account data is lost, stolen or used without permission.</p>
          </div>

          <div>
            <h2 className="section-title mb-4">Cookies &amp; Comments</h2>
            <p className="mb-4">
              When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor&rsquo;s IP address and browser user agent string to help spam detection.
            </p>
            <p className="mb-4">
              If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.
            </p>
            <p>
              Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website. These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content.
            </p>
          </div>

          <div>
            <h2 className="section-title mb-4">How Long We Retain Your Data</h2>
            <p className="mb-4">
              If you leave a comment, the comment and its metadata are retained indefinitely so we can recognize and approve any follow-up comments automatically.
            </p>
            <p>
              For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.
            </p>
          </div>

          <div>
            <h2 className="section-title mb-4">What Rights You Have Over Your Data</h2>
            <p>
              If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.
            </p>
          </div>

          <div>
            <h2 className="section-title mb-4">Changes to This Notice</h2>
            <p>
              We reserve the right to amend our Privacy Policy at our discretion and at any time. When we make changes to the Privacy Policy, we will notify you by email or through a notice on our website homepage. Use of the information we collect is subject to the Privacy Policy in effect at the time such information is collected.
            </p>
          </div>

          <div>
            <h2 className="section-title mb-4">Contact Information</h2>
            <p>
              If you have any questions or comments about this Privacy Policy, the ways in which we collect and use your Personal Data, your choices and rights regarding such use, please do not hesitate to contact us at{" "}
              <a href="mailto:crael@iip.services" className="footer-legal-link">crael@iip.services</a>
              {" "}or by calling{" "}
              <a href="tel:5058961348" className="footer-legal-link">(505) 896-1348</a>.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
