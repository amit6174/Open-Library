# Open-Library
Tutorial to create a simple online database for your library

This system uses Google Appscript to store history-based catalogue of your "open"-library automatically updating after each donation / feedback. Please note this is a simple system which is not fully dynamic in nature. So, this catalogue would NOT represent the current names of books at the present moment, but rather be a list of books which have gone through the system atleast once in the past.

So basically each item in the catalogue has come to the library system atleast once in the past. Well, can there be fraud updates regarding the catalogue? (yes, obviously! but you can keep a track of probable misuse physically, although this wont be enough, yet can be managable)

Book Donors can click on a QR-code which redirects them to a webapp where they can enter the details of the book they wish to add to the system.
Also a feedback page can help with the any required changes as per time.

This catalogue system is made simple and self-sustainable due to four reasons:
1. This library follows the "open library" concept, in which there is no maintenance of any kind as such regarding any facility of the library. So keeping track of live updates of book entries defies the logic for the "open library" concept. Keeping track dynamically is tedious (discussed later)
2. Easy tech like QR-scans and Google sheets are nowadays very user-friendly, and all age-groups can get used to them.
3. Few inaccuracies in the model don't matter. People can use this catalogue to get a rough idea of the books that have been once through the system. If they want they can check for the books physically in the system. But sometimes they won't get the books as per the catalogue. This has to be made clear to everyone beforehand.
4. The history-based catalogue is super accurate (~98-100%). Because it represents just history. So a faulty entry while donating is the only means to decrease the accuracy of this model, which happens rarely in a reader-engaging area.


Eventually an intuition suggests that people will get adapted to this simple system by repeated interactions with this catalogue.


Future Work:
1. If volunteers can be afforded at all times during each day of the week, or if sophistication can be made so that people follow all the instructions at all times, then a full-fledged catalgoue with dynamic updates (donate / withdraw / replace)  can be implemented. Here, we 'must' ensure to have ~98-100 % accuracy. This can be done by keeping watch on the data entries (who, why, etc), regularly updating qr-codes to reduce unnecessary/fraudant entries, removing errors from the database time to time. This can be awesome, but if not properly utilized, the accuracy of this model can drop-down to very low (~30%) within only a year.
2. A mixture of the simple model and the perfect model (point 1, future work), well physical maintanence can become handy with some weekly/monthly volunteering.

Aristotle - "We are what we repeatedly do"

A reading habit to the young generations, is an ultimate gift to the world!
