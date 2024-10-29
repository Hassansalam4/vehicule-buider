# Challenge 8



Your task is to update an existing TypeScript command-line application that builds and uses cars to have additional options for motorbikes and trucks. The application prompts the user to create a new vehicle or select an existing vehicle. After going through the creation process or the selection process, the user is able to perform certain actions with the selected vehicle. The user is returned to the actions menu after each action until they decide to exit the application.
Because this application won't be deployed, you'll need to provide a link to a walkthrough video that demonstrates its functionality. You'll need to submit a link to the video and add it to the README of your project.
Refer to the video submission guide on the Full-Stack Blog for additional guidance on creating a video.


## User Story
AS a developer
I WANT to update an existing application to include additional vehicle types
SO THAT I am able to comprehend and work with existing code bases.



## Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I am prompted to create a new vehicle or existing vehicle
THEN I can choose between the two options
WHEN I am prompted to choose the vehicle type during creation
THEN I can choose between car, truck, and motorbike
WHEN I am prompted for details about the vehicle
THEN I can enter the vehicle information
WHEN I have entered all the vehicle information
THEN I can use the created vehicle
WHEN I select an existing vehicle
THEN I can use the selected existing vehicle
WHEN I have created a new vehicle or selected an existing vehicle
THEN I can perform actions with that vehicle
WHEN I perform an action with a vehicle
THEN I see the result of the action in the command-line
WHEN I complete the process of performing an action
THEN I can perform additional actions until I choose to exit

## Additional Requirements
This Challenge combines many of the skills covered so far. In addition to the user story and acceptance criteria, we've provided some guidelines to help you get started.
Because this Challenge requires a video submission, refer to the Full-Stack Blog video submission guide for guidance on creating and sharing a video.
Your application should use Inquirer for collecting input from the user. The application will be invoked by using the following command:
`npm start`


## Files to work through
`Cli.ts` --> work through this
`Motorbike.ts` --> done
`Truck.ts` --> done
`index.ts` --> uncomment code once done with CLI 