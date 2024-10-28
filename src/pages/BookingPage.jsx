import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const BookingPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Booking request submitted successfully! We'll contact you soon.");
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-brown-900 mb-8">Book an Appointment</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" required />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required />
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" required />
        </div>
        <div>
          <Label htmlFor="service">Service</Label>
          <Select name="service" required>
            <SelectTrigger>
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bridal">Bridal Mehndi</SelectItem>
              <SelectItem value="facial">Facial Treatment</SelectItem>
              <SelectItem value="hair">Hair Styling</SelectItem>
              <SelectItem value="threading">Threading & Waxing</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="date">Preferred Date</Label>
          <Input id="date" name="date" type="date" required />
        </div>
        <div>
          <Label htmlFor="time">Preferred Time</Label>
          <Select name="time" required>
            <SelectTrigger>
              <SelectValue placeholder="Select a time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
              <SelectItem value="afternoon">Afternoon (12 PM - 4 PM)</SelectItem>
              <SelectItem value="evening">Evening (4 PM - 8 PM)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="notes">Special Requirements</Label>
          <Textarea id="notes" name="notes" placeholder="Any special requests or requirements?" />
        </div>
        <Button type="submit" className="w-full bg-brown-600 hover:bg-brown-700">
          Book Appointment
        </Button>
      </form>
    </div>
  );
};

export default BookingPage;