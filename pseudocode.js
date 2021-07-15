//
// Application ===========================================================
// a user clicks a button to generate a password
// presented with a series of prompts for password criteria
//          - how long (how many characters)? number
                            // - only allow 8 - 128 characters (validation)
                            // if it's lower than 8 or higher than 128
                                //message: the number has to be from 8 - 128 characters
//          - ok to use lowercase? abcdefghijklmnopqrstuvwxyz (boolean)
//          - ok to use uppercase? ABCDEFGHIJKLMNOPQRSTUVWXYZ (boolean)
//          - ok to use special characters? !@#$%^&*()_+=?/ (boolean)
//          - ok to use numbers? 0123456789 (boolean)
// - check that at least one character type was selected.
//   if not? restart the prompts
//          - generate the password
//            random value
//    Combining the selected lists into a new BIG list.
//  
// Randomly selecting however many characters the user to us to
//      - placing them into a new string
// Create new Array with the values of all of the combined "yeses" above.
//     - Return the new string