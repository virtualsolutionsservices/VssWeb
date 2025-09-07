// meetingService.ts
import { db } from "../../config/firebaseconfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export async function saveMeeting(employerId: string, date: Date) {
  try {
    await addDoc(collection(db, "meetings"), {
      employerId,
      date: Timestamp.fromDate(date),
      createdAt: Timestamp.now()
    });
    console.log("Meeting saved successfully!");
  } catch (error) {
    console.error("Error saving meeting:", error);
  }
}
