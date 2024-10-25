import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import { formatCurrentDate } from '../../utils/formatTime';

const PrivacyPolicies = () => {
  return (
    <section className='space-y-10'>
      <div className='space-y-2'>
        {/* Slide effect for the main title */}
        <Slide direction="down" triggerOnce>
          <h3 className='font-bold text-3xl lg:text-4xl'>Privacy Policy for Ajosquad</h3>
        </Slide>

        {/* Fade effect for the introduction paragraph */}
        <Fade triggerOnce>
          <p className='lg:text-lg'>
            This Privacy Policy takes effect from {formatCurrentDate()} (hereinafter referred to as the effective date).
            In this Privacy Policy, references to 'Our', 'Ourselves', 'We' or 'Us', our Terms and Conditions (T&Cs), this Privacy Policy, and any or all other Agreements, are to Ajosquad and the services offered on our website and mobile application.
            We, at Ajosquad, are committed to protecting your privacy and the data you submit to us in order to access our services.
          </p>
        </Fade>

        <Fade delay={200} triggerOnce>
          <p className='lg:text-lg'>
            This Privacy Policy details how we collect, store, use, disclose, safeguard and protect your information when you use services offered on our website, located at www.Ajosquad.com, and our mobile application, including any related services (collectively, hereinafter called “Our Services").
          </p>
        </Fade>

        <Fade delay={400} triggerOnce>
          <p className='lg:text-lg'>
            PLEASE READ THIS PRIVACY POLICY CAREFULLY. IF YOU DO NOT AGREE WITH THE TERMS OF THIS PRIVACY POLICY, PLEASE DO NOT PROCEED WITH USING OUR SERVICES.
            By continuing to use our services, you are deemed to have read, understood, and expressly agreed to and granted Us consent to collect, store, use, disclose, and safeguard your information.
          </p>
        </Fade>
      </div>

      {/* Information/Data Collection */}
      <div className='space-y-2'>
        <Slide direction="down" triggerOnce>
          <h3 className='font-bold text-3xl lg:text-4xl'>Information/Data We Collect</h3>
        </Slide>
        <Fade triggerOnce>
          <p className='lg:text-lg'>
            In order to effectively provide our services to you, we may collect the following data from you:
          </p>
        </Fade>
        <Fade triggerOnce>
          <ul className='lg:text-lg list-disc list-inside'>
            <li>Personal Identification Information/Data: This includes your name, address, email address, phone number, date of birth, gender, and other similar information.</li>
            <li>User Profile Information/Data: This includes the content/data you generate, including your profile photos, videos, likes, and biographical information.</li>
            <li>Usage and Device Information/Data: This includes information such as your IP address, device IMEI, browser type, operating system, access times, and pages viewed.</li>
            <li>Location Information/Data: This includes information about your live and previous locations if you have enabled location services.</li>
          </ul>
        </Fade>
      </div>

      {/* Usage of Information/Data */}
      <div className='space-y-2'>
        <Slide direction="down" triggerOnce>
          <h3 className='font-bold text-3xl lg:text-4xl'>How We Use Your Information/Data</h3>
        </Slide>
        <Fade triggerOnce>
          <p className='lg:text-lg'>
            We may use the information/data you provide during registration or while using our services for the following purposes:
          </p>
        </Fade>
        <Fade triggerOnce>
          <ul className='lg:text-lg list-disc list-inside'>
            <li>To provide, operate, and maintain our services.</li>
            <li>To improve, personalize, and expand our services.</li>
            <li>To analyze how you use our services and match you with relevant users or profiles.</li>
            <li>To develop new features and services that match your interests.</li>
            <li>To communicate with you, including customer service and updates related to our services.</li>
            <li>To process your transactions and manage orders.</li>
            <li>To prevent fraud and analyze activities that may pose risks.</li>
            <li>To send you emails and push notifications.</li>
          </ul>
        </Fade>
      </div>

      {/* Legal Basis for Processing Information/Data */}
      <div className='space-y-2'>
        <Slide direction="down" triggerOnce>
          <h3 className='font-bold text-3xl lg:text-4xl'>Legal Basis for Processing Your Information/Data</h3>
        </Slide>
        <Fade triggerOnce>
          <p className='lg:text-lg'>
            If you are using our services from the European Economic Area (EEA), we process your information/data for the following reasons:
          </p>
        </Fade>
        <Fade triggerOnce>
          <ul className='lg:text-lg list-disc list-inside'>
            <li>You have given us consent for processing your data for the purposes listed above.</li>
            <li>We need the information/data to perform the contract between us and you.</li>
            <li>Processing is in our legitimate interests, and your rights are not overridden.</li>
            <li>To comply with applicable laws and assist law enforcement, where necessary.</li>
          </ul>
        </Fade>
      </div>

      {/* Information/Data Sharing */}
      <div className='space-y-2'>
        <Slide direction="down" triggerOnce>
          <h3 className='font-bold text-3xl lg:text-4xl'>Information/Data Sharing</h3>
        </Slide>
        <Fade triggerOnce>
          <p className='lg:text-lg'>
            We do not sell, trade, or transfer your information/data to third parties without prior notice and consent. However, we may share information in the following circumstances:
          </p>
        </Fade>
        <Fade triggerOnce>
          <ul className='lg:text-lg list-disc list-inside'>
            <li>With service providers to help operate and maintain our services.</li>
            <li>In response to lawful requests by law enforcement agencies.</li>
            <li>With third parties, with your express consent.</li>
            <li>To protect our rights, property, and safety, or that of users or third parties.</li>
          </ul>
        </Fade>
      </div>

      {/* Your Rights */}
      <div className='space-y-2'>
        <Slide direction="down" triggerOnce>
          <h3 className='font-bold text-3xl lg:text-4xl'>Your Rights</h3>
        </Slide>
        <Fade triggerOnce>
          <p className='lg:text-lg'>
            Depending on your location, you have the following rights under this policy:
          </p>
        </Fade>
        <Fade triggerOnce>
          <ul className='lg:text-lg list-disc list-inside'>
            <li>Right to Access: You may request copies of the information/data we collect from you.</li>
            <li>Right to Rectification: You may request corrections to inaccurate or incomplete data.</li>
            <li>Right to Erasure: You may request the deletion of your information/data, under certain conditions.</li>
            <li>Right to Restriction: You may request restrictions on how your data is shared with third parties.</li>
          </ul>
        </Fade>
        <Fade triggerOnce>
          <p className='lg:text-lg'>
            To exercise any of the above rights, feel free to reach us via email at support@ajosquad.com.
          </p>
        </Fade>
      </div>

      {/* Security Measures */}
      <div className='space-y-2'>
        <Slide direction="down" triggerOnce>
          <h3 className='font-bold text-3xl lg:text-4xl'>How We Secure Your Information/Data</h3>
        </Slide>
        <Fade triggerOnce>
          <p className='lg:text-lg'>
            We use various measures to safeguard your data, including:
          </p>
        </Fade>
        <Fade triggerOnce>
          <ul className='lg:text-lg list-disc list-inside'>
            <li>Data Encryption: We encrypt your data from the point of entry, in transit, and at rest.</li>
            <li>Access Control: We restrict access to authorized administrators.</li>
            <li>Regular Audits: We conduct security and vulnerability audits regularly.</li>
            <li>Incident Response: We have a plan in place for swift response to any data breach.</li>
          </ul>
        </Fade>
      </div>

      {/* Data Retention */}
      <div className='space-y-2'>
        <Slide direction="down" triggerOnce>
          <h3 className='font-bold text-3xl lg:text-4xl'>Information/Data Retention</h3>
        </Slide>
        <Fade triggerOnce>
          <p className='lg:text-lg'>
            We retain your data as long as your account is active or as necessary to provide you with our services. If you request deletion of your data, we will comply, unless retaining it is necessary for legal or operational reasons.
          </p>
        </Fade>
      </div>
    </section>
  );
};

export default PrivacyPolicies;
