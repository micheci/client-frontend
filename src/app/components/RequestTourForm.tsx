import React from "react";

const RequestTourForm = () => {
  return (
    <form className="w-full max-w-md bg-white bg-opacity-60 p-4 rounded-lg shadow-md space-y-4">
      <h3 className="text-lg font-semibold">Contact Seller</h3>

      <div>
        <label className="block text-sm mb-1">Full Name</label>
        <input
          type="text"
          name="name"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded"
          placeholder="John Doe"
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Email Address</label>
        <input
          type="email"
          name="email"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Phone Number (optional)</label>
        <input
          type="tel"
          name="phone"
          className="w-full px-3 py-2 border border-gray-300 rounded"
          placeholder="(123) 456-7890"
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Message</label>
        <textarea
          name="message"
          required
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded"
          placeholder="I'm interested in this property. Can we schedule a tour?"
        />
      </div>

      <button
        type="submit"
        className="bg-orange-500 hover:bg-orange-400 text-white font-medium py-2 px-4 rounded w-full"
      >
        Send Message
      </button>
    </form>
  );
};

export default RequestTourForm;
