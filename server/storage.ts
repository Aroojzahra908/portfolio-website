import { 
  users, 
  type User, 
  type InsertUser, 
  waitlistEntries, 
  type WaitlistEntry, 
  type InsertWaitlistEntry,
  contactMessages,
  type ContactMessage,
  type InsertContactMessage
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Waitlist methods
  createWaitlistEntry(entry: InsertWaitlistEntry): Promise<WaitlistEntry>;
  getWaitlistEntries(): Promise<WaitlistEntry[]>;
  
  // Contact form methods
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private waitlist: Map<number, WaitlistEntry>;
  private contacts: Map<number, ContactMessage>;
  private userId: number;
  private waitlistId: number;
  private contactId: number;

  constructor() {
    this.users = new Map();
    this.waitlist = new Map();
    this.contacts = new Map();
    this.userId = 1;
    this.waitlistId = 1;
    this.contactId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createWaitlistEntry(insertEntry: InsertWaitlistEntry): Promise<WaitlistEntry> {
    // Check if email already exists
    const existingEntry = Array.from(this.waitlist.values()).find(
      (entry) => entry.email === insertEntry.email
    );

    if (existingEntry) {
      throw new Error("Email already exists in waitlist (unique constraint)");
    }

    const id = this.waitlistId++;
    const createdAt = new Date();
    const entry: WaitlistEntry = { ...insertEntry, id, createdAt };
    this.waitlist.set(id, entry);
    return entry;
  }

  async getWaitlistEntries(): Promise<WaitlistEntry[]> {
    return Array.from(this.waitlist.values());
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = this.contactId++;
    const createdAt = new Date();
    const message: ContactMessage = { ...insertMessage, id, createdAt };
    this.contacts.set(id, message);
    return message;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contacts.values());
  }
}

export const storage = new MemStorage();
