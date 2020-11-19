![alt text](https://github.com/sagarjethi/parking-lot-system/blob/master/parking.png?raw=true)

### Problem Statement

I own a multi-storey parking lot that can hold up to 'n' cars at any given point in time. Each slot is given a number starting at 1 increasing with increasing distance from the entry point in steps of one. I want to create an automated ticketing system that allows my customers to use my parking lot without human intervention.

When a car enters my parking lot, I want to have a ticket issued to the driver. The ticket issuing process includes us documenting the plate number and the colour of the car and allocating an available parking slot to the car before actually handing over a ticket to the driver (we assume that our customers are nice enough to always park in the slots allocated to them). The customer should be allocated a parking slot which is nearest to the entry. At the exit the customer returns the ticket which then marks the slot they were using as being available.

Due to government regulation, the system should provide me with the ability to find out: 

a. Plate numbers of all cars of a particular colour. 

b. Slot number in which a car with a given plate number is parked. 

c. Slot numbers of all slots where a car of a particular colour is parked.

We interact with the system via a simple set of commands which produce a specific output. Please take a look at the example below, which includes all the commands you need to support - they're self explanatory. 

The system should allow input in two ways. Just to clarify, the same codebase should support both modes of input - we don't want two distinct submissions.

1. It should provide us with an interactive command prompt based shell where commands can be typed in 
2. It should accept a filename as a parameter at the command prompt and read the commands from that file

# Parking-lot-ticket-system implement a solution using React.
Automated parking lot ticket system created using React.js, Redux and Bootstrap


1) Generate Virtual Parking lot with number of paking spaces and filled spots.
2) Add new vehicle and assign closest available spot to the new entrying vehicle.
3) Update the record on exit of the vehicle.

Build with React components to display the current status of the lot.
Used Redux to manage the current state of the system.

#steps for setup

`npm install`

`npm start`


