import type { ContactEntry } from '../../backend';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { Mail, Phone, User, Calendar, MessageSquare } from 'lucide-react';

interface ContactDetailDialogProps {
  contact: ContactEntry | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ContactDetailDialog({ contact, open, onOpenChange }: ContactDetailDialogProps) {
  if (!contact) return null;

  const formatDate = (timestamp: bigint) => {
    const date = new Date(Number(timestamp) / 1000000); // Convert nanoseconds to milliseconds
    return date.toLocaleString('en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Contact Submission Details</DialogTitle>
          <DialogDescription>Full information from the contact form</DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Name */}
          <div className="flex items-start space-x-3">
            <div className="mt-1 p-2 bg-primary/10 rounded-lg">
              <User className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-muted-foreground">Name</p>
              <p className="text-lg font-semibold mt-1">{contact.name}</p>
            </div>
          </div>

          <Separator />

          {/* Phone */}
          <div className="flex items-start space-x-3">
            <div className="mt-1 p-2 bg-primary/10 rounded-lg">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-muted-foreground">Phone Number</p>
              <a
                href={`tel:${contact.phone}`}
                className="text-lg font-semibold mt-1 hover:text-primary transition-colors inline-block"
              >
                {contact.phone}
              </a>
            </div>
          </div>

          <Separator />

          {/* Email */}
          <div className="flex items-start space-x-3">
            <div className="mt-1 p-2 bg-primary/10 rounded-lg">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-muted-foreground">Email Address</p>
              <a
                href={`mailto:${contact.email}`}
                className="text-lg font-semibold mt-1 hover:text-primary transition-colors inline-block break-all"
              >
                {contact.email}
              </a>
            </div>
          </div>

          <Separator />

          {/* Message */}
          <div className="flex items-start space-x-3">
            <div className="mt-1 p-2 bg-primary/10 rounded-lg">
              <MessageSquare className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-muted-foreground">Message</p>
              <p className="text-base mt-2 whitespace-pre-wrap leading-relaxed">{contact.message}</p>
            </div>
          </div>

          <Separator />

          {/* Timestamp */}
          <div className="flex items-start space-x-3">
            <div className="mt-1 p-2 bg-primary/10 rounded-lg">
              <Calendar className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-muted-foreground">Submitted On</p>
              <p className="text-base font-medium mt-1">{formatDate(contact.timestamp)}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
