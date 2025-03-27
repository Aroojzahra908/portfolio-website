import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistSchema, insertContactSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for waitlist
  app.post("/api/waitlist", async (req, res) => {
    try {
      const validatedData = insertWaitlistSchema.parse(req.body);
      const entry = await storage.createWaitlistEntry(validatedData);
      res.status(201).json({
        message: "Successfully joined the waitlist!",
        entry
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ message: validationError.message });
      } else if (error instanceof Error && error.message.includes("unique")) {
        res.status(409).json({ message: "This email is already on the waitlist." });
      } else {
        console.error("Waitlist error:", error);
        res.status(500).json({ message: "Failed to join waitlist. Please try again later." });
      }
    }
  });

  // API routes for contact form
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      res.status(201).json({
        message: "Message sent successfully!",
        contact: message
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ message: validationError.message });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ message: "Failed to send message. Please try again later." });
      }
    }
  });

  // Return a downloadable resume file
  app.get("/api/resume", (_req, res) => {
    // This would normally send a file, but we'll send JSON for the demo
    res.json({
      message: "Resume would be downloaded here in production.",
      name: "Arooj Zahra - Resume.pdf"
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
