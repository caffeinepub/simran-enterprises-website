import { useState, useMemo } from 'react';
import type { ContactEntry } from '../../backend';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, X, ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';
import ContactDetailDialog from './ContactDetailDialog';

interface ContactsTableProps {
  contacts: ContactEntry[];
}

type SortOrder = 'asc' | 'desc';

export default function ContactsTable({ contacts }: ContactsTableProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');
  const [selectedContact, setSelectedContact] = useState<ContactEntry | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Filter contacts based on search query
  const filteredContacts = useMemo(() => {
    if (!searchQuery.trim()) return contacts;

    const query = searchQuery.toLowerCase();
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(query) ||
        contact.email.toLowerCase().includes(query) ||
        contact.phone.toLowerCase().includes(query)
    );
  }, [contacts, searchQuery]);

  // Sort contacts by timestamp
  const sortedContacts = useMemo(() => {
    return [...filteredContacts].sort((a, b) => {
      const timeA = Number(a.timestamp);
      const timeB = Number(b.timestamp);
      return sortOrder === 'desc' ? timeB - timeA : timeA - timeB;
    });
  }, [filteredContacts, sortOrder]);

  const toggleSortOrder = () => {
    setSortOrder((prev) => (prev === 'desc' ? 'asc' : 'desc'));
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  const handleRowClick = (contact: ContactEntry) => {
    setSelectedContact(contact);
    setIsDialogOpen(true);
  };

  const formatDate = (timestamp: bigint) => {
    const date = new Date(Number(timestamp) / 1000000); // Convert nanoseconds to milliseconds
    return date.toLocaleString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <>
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Contact Submissions</CardTitle>
          <CardDescription>
            {contacts.length} total submission{contacts.length !== 1 ? 's' : ''}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Search Bar */}
          <div className="mb-6 flex items-center space-x-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by name, email, or phone..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-10"
              />
              {searchQuery && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={clearSearch}
                  className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7"
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>

          {/* Table */}
          {sortedContacts.length === 0 ? (
            <div className="text-center py-12 bg-muted/30 rounded-lg">
              <p className="text-muted-foreground text-lg">
                {searchQuery ? 'No results found' : 'No contact submissions yet'}
              </p>
              {searchQuery && (
                <Button variant="link" onClick={clearSearch} className="mt-2">
                  Clear search
                </Button>
              )}
            </div>
          ) : (
            <div className="rounded-md border overflow-hidden">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="font-semibold">Name</TableHead>
                      <TableHead className="font-semibold">Phone</TableHead>
                      <TableHead className="font-semibold">Email</TableHead>
                      <TableHead className="font-semibold">Message</TableHead>
                      <TableHead className="font-semibold">
                        <Button
                          variant="ghost"
                          onClick={toggleSortOrder}
                          className="h-8 px-2 hover:bg-muted"
                        >
                          Date
                          {sortOrder === 'desc' ? (
                            <ArrowDown className="ml-2 h-4 w-4" />
                          ) : (
                            <ArrowUp className="ml-2 h-4 w-4" />
                          )}
                        </Button>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sortedContacts.map((contact, index) => (
                      <TableRow
                        key={index}
                        onClick={() => handleRowClick(contact)}
                        className="cursor-pointer hover:bg-muted/50 transition-colors"
                      >
                        <TableCell className="font-medium">{contact.name}</TableCell>
                        <TableCell>{contact.phone}</TableCell>
                        <TableCell className="text-sm">{contact.email}</TableCell>
                        <TableCell className="max-w-xs">
                          <span className="text-sm text-muted-foreground">
                            {truncateText(contact.message, 50)}
                          </span>
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground whitespace-nowrap">
                          {formatDate(contact.timestamp)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          )}

          {sortedContacts.length > 0 && (
            <p className="text-sm text-muted-foreground mt-4 text-center">
              Showing {sortedContacts.length} of {contacts.length} submission
              {contacts.length !== 1 ? 's' : ''}
            </p>
          )}
        </CardContent>
      </Card>

      <ContactDetailDialog
        contact={selectedContact}
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
    </>
  );
}
