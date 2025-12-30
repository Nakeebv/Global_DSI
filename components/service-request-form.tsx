"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useToast } from "@/hooks/use-toast"
import { Send } from "lucide-react"

export function ServiceRequestForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Service request submitted!",
      description: "I'll review your requirements and send you a detailed proposal within 48 hours.",
    })

    setIsSubmitting(false)
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Contact Information */}
      <div className="space-y-6">
        <h3 className="font-serif text-lg font-semibold">Contact Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="contactFirstName">First Name *</Label>
            <Input id="contactFirstName" name="contactFirstName" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contactLastName">Last Name *</Label>
            <Input id="contactLastName" name="contactLastName" required />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="contactEmail">Email Address *</Label>
            <Input id="contactEmail" name="contactEmail" type="email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contactPhone">Phone Number *</Label>
            <Input id="contactPhone" name="contactPhone" type="tel" required />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="contactCompany">Company/Organization *</Label>
          <Input id="contactCompany" name="contactCompany" required />
        </div>
      </div>

      {/* Project Details */}
      <div className="space-y-6">
        <h3 className="font-serif text-lg font-semibold">Project Details</h3>

        <div className="space-y-2">
          <Label htmlFor="serviceType">Primary Service Needed *</Label>
          <Select name="serviceType" required>
            <SelectTrigger>
              <SelectValue placeholder="Select primary service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="saas">SaaS Development</SelectItem>
              <SelectItem value="mvp">MVP Development</SelectItem>
              <SelectItem value="ai">AI Automation</SelectItem>
              <SelectItem value="integration">System Integration</SelectItem>
              <SelectItem value="web-app">Web Application</SelectItem>
              <SelectItem value="custom">Custom Solution</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="projectTitle">Project Title *</Label>
          <Input id="projectTitle" name="projectTitle" placeholder="Brief title for your project" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="projectDescription">Project Description *</Label>
          <Textarea
            id="projectDescription"
            name="projectDescription"
            placeholder="Describe your project, goals, and key requirements..."
            className="min-h-[120px]"
            required
          />
        </div>

        <div className="space-y-3">
          <Label>Additional Services Needed</Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "User Authentication",
              "Payment Processing",
              "Admin Dashboard",
              "Mobile Responsive Design",
              "API Development",
              "Database Design",
              "Third-party Integrations",
              "Analytics & Reporting",
            ].map((service) => (
              <div key={service} className="flex items-center space-x-2">
                <Checkbox id={service.replace(/\s+/g, "")} name="additionalServices" value={service} />
                <Label htmlFor={service.replace(/\s+/g, "")} className="text-sm font-normal">
                  {service}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline & Budget */}
      <div className="space-y-6">
        <h3 className="font-serif text-lg font-semibold">Timeline & Budget</h3>

        <div className="space-y-3">
          <Label>Desired Timeline *</Label>
          <RadioGroup name="timeline" required>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="asap" id="asap" />
              <Label htmlFor="asap" className="font-normal">
                ASAP (Rush project - may incur additional fees)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="1-2months" id="1-2months" />
              <Label htmlFor="1-2months" className="font-normal">
                1-2 months
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="2-4months" id="2-4months" />
              <Label htmlFor="2-4months" className="font-normal">
                2-4 months
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="4+months" id="4+months" />
              <Label htmlFor="4+months" className="font-normal">
                4+ months
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="flexible" id="flexible" />
              <Label htmlFor="flexible" className="font-normal">
                Flexible
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label htmlFor="budget">Estimated Budget Range</Label>
          <Select name="budget">
            <SelectTrigger>
              <SelectValue placeholder="Select budget range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="under-5k">Under $5,000</SelectItem>
              <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
              <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
              <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
              <SelectItem value="50k+">$50,000+</SelectItem>
              <SelectItem value="discuss">Prefer to discuss</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Additional Information */}
      <div className="space-y-6">
        <h3 className="font-serif text-lg font-semibold">Additional Information</h3>

        <div className="space-y-2">
          <Label htmlFor="existingSystems">Existing Systems/Technologies</Label>
          <Textarea
            id="existingSystems"
            name="existingSystems"
            placeholder="List any existing systems, databases, or technologies that need to be integrated..."
            className="min-h-[80px]"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="specificRequirements">Specific Requirements or Constraints</Label>
          <Textarea
            id="specificRequirements"
            name="specificRequirements"
            placeholder="Any specific technical requirements, compliance needs, or constraints..."
            className="min-h-[80px]"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="additionalInfo">Additional Information</Label>
          <Textarea
            id="additionalInfo"
            name="additionalInfo"
            placeholder="Anything else you'd like me to know about your project..."
            className="min-h-[80px]"
          />
        </div>
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full" size="lg">
        {isSubmitting ? (
          "Submitting Request..."
        ) : (
          <>
            Submit Service Request
            <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>

      <p className="text-sm text-muted-foreground text-center">
        I'll review your request and send you a detailed proposal within 48 hours. All information is kept confidential.
      </p>
    </form>
  )
}
