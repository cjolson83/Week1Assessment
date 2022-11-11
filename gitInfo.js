/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE

var gitDefinition = "Git is a version control system that allows programmers to capture snapshots of code projects in order to track changes and allow for collaborative work within groups by allowing parallel branches of a project to be worked on different systems. This is especially useful for large teams where non-linear development is happening and different branches of code are needing to be reviewed, updated, and merged by many people."

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE

var gitHubDefinition = "GitHub is a sepcific online hosting service that allows users to utilize Git in order to create and access remote git repolitiories. Essentially a cloud service for Git repositories."

//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE

var gitInitDefinition = "The git-init command creates an empty repository within an existing directory on your local machine."

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE

var gitCloneDefinition = "The git clone command retrieves a git repository from a hosted location via URL. For example, you would use this command to pull a repository down from GitHub onto your local device in order to work on the files contained within it"

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE

var gitStatusDefinition = "The git status command allows you to see the status of the files within a directory and whether they have been modified or are staged for commit."

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE

var gitAddDefinition = "The git add function allows you to add new or updated file(s) into the staging area for the next commit."

var gitAddCode = git add -A

//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.


    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE

var gitCommitDefinition = "The git commit command commits your staged content as a new commit snapshot. This, in essence, adds the content you staged using git add command to the repository."

var gitCommitCode = git commit - m "initial commit"

//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE

var gitPushDefinition = "The git push command is used to transefer your commits from a local to a remote repository (i.e. GitHub)."