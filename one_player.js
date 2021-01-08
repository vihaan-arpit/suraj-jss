$( document ).ready(function() {
    var ch=0;


    // getting all button object
    b1=document.getElementById('b1');
    b2=document.getElementById('b2');
    b3=document.getElementById('b3');
    b4=document.getElementById('b4');
    b5=document.getElementById('b5');
    b6=document.getElementById('b6');
    b7=document.getElementById('b7');
    b8=document.getElementById('b8');
    b9=document.getElementById('b9');
    reset=document.getElementById('reset');

    // set all button value empty
    b1.value='';
    b2.value='';
    b3.value='';
    b4.value='';
    b5.value='';
    b6.value='';
    b7.value='';
    b8.value='';
    b9.value='';

    function disable()
    {
        b1.disabled = true;
        b2.disabled = true;
        b3.disabled = true;
        b4.disabled = true;
        b5.disabled = true;
        b6.disabled = true;
        b7.disabled = true;
        b8.disabled = true;
        b9.disabled = true;
    }
    function enable()
    {
        b1.disabled = false;
        b2.disabled = false;
        b3.disabled = false;
        b4.disabled = false;
        b5.disabled = false;
        b6.disabled = false;
        b7.disabled = false;
        b8.disabled = false;
        b9.disabled = false;
    }


    /* system input() start */

    function systemInput()
    {
        if(b1.value=='x' && b2.value=='x' && b3.value=='')
        {
            b3.value='x';
            ch=0;
            checkcondition();
        }



        else if(b2.value=='x' && b5.value=='x' && b1.value=='')
        {
            b1.value='x'
            ch=0;
            checkcondition();
        }
        else if(b1.value=='x' && b3.value=='x' && b2.value=='')
        {
            b2.value='x'
            ch=0;
            checkcondition();
        }

        //second  row

        else if(b4.value=='x' && b5.value=='x' && b6.value=='')
        {
            b6.value='x'
            ch=0;
            checkcondition();
        }
        else if(b5.value=='x' && b6.value=='x' && b4.value=='')
        {
            b4.value='x'
            ch=0;
            checkcondition();
        }
        else if(b4.value=='x' && b6.value=='x' && b5.value=='')
        {
            b5.value='x'
            ch=0;
            checkcondition();
        }

        //third  row

        else if(b7.value=='x' && b8.value=='x' && b9.value=='')
        {
            b9.value='x'
            ch=0;
            checkcondition();
        }
        else if(b8.value=='x' && b9.value=='x' && b7.value=='')
        {
            b7.value='x'
            ch=0;
            checkcondition();
        }
        else if(b7.value=='x' && b9.value=='x' && b8.value=='')
        {
            b8.value='x'
            ch=0;
            checkcondition();
        }

        //first col

        else if(b1.value=='x' && b4.value=='x' && b7.value=='')
        {
            b7.value='x'
            ch=0;
            checkcondition();
        }
        else if(b4.value=='x' && b7.value=='x' && b1.value=='')
        {
            b1.value='x'
            ch=0;
            checkcondition();
        }
        else if(b1.value=='x' && b7.value=='x' && b4.value=='')
        {
            b4.value='x'
            ch=0;
            checkcondition();
        }

        //second col

        else if(b2.value=='x' && b5.value=='x' && b8.value=='')
        {
            b8.value='x'
            ch=0;
            checkcondition();
        }
        else if(b5.value=='x' && b8.value=='x' && b2.value=='')
        {
            b2.value='x'
            ch=0;
            checkcondition();
        }
        else if(b2.value=='x' && b8.value=='x' && b5.value=='')
        {
            b5.value='x'
            ch=0;
            checkcondition();
        }

        //third col

        else if(b3.value=='x' && b6.value=='x' && b9.value=='')
        {
            b9.value='x'
            ch=0;
            checkcondition();
        }
        else if(b6.value=='x' && b9.value=='x' && b3.value=='')
        {
            b3.value='x'
            ch=0;
            checkcondition();
        }
        else if(b3.value=='x' && b9.value=='x' && b6.value=='')
        {
            b6.value='x'
            ch=0;
            checkcondition();
        }

        //cross angle

        else if(b1.value=='x' && b5.value=='x' && b9.value=='')
        {
            b9.value='x'
            ch=0;
            checkcondition();
        }
        else if(b5.value=='x' && b9.value=='x' && b1.value=='')
        {
            b1.value='x'
            ch=0;
            checkcondition();
        }
        else if(b1.value=='x' && b9.value=='x' && b5.value=='')
        {
            b5.value='x'
            ch=0;
            checkcondition();
        }

        //cross angle

        else if(b7.value=='x' && b5.value=='x' && b3.value=='')
        {
            b3.value='x'
            ch=0;
            checkcondition();
        }
        else if(b5.value=='x' && b3.value=='x' && b7.value=='')
        {
            b7.value='x'
            ch=0;
            checkcondition();
        }
        else if(b7.value=='x' && b3.value=='x' && b5.value=='')
        {
            b5.value='x'
            ch=0;
            checkcondition();
        }








        // condition for defence
        //first button pressed start time
        else if(b1.value=='0' && b2.value=='' && b3.value=='' && b4.value=='' && b5.value=='' && b6.value==''
                && b7.value=='' && b8.value=='' &&  b9.value=='')
        {
            b5.value='x'
            ch=0;
            checkcondition();
        }
        //second button pressed start time
        else if(b1.value=='' && b2.value=='0' && b3.value=='' && b4.value=='' && b5.value=='' && b6.value==''
                && b7.value=='' && b8.value=='' &&  b9.value=='')
        {
            b3.value='x'
            ch=0;
            checkcondition();
        }
        //third button pressed start time
        else if(b1.value=='' && b2.value=='' && b3.value=='0' && b4.value=='' && b5.value=='' && b6.value==''
                && b7.value=='' && b8.value=='' &&  b9.value=='')
        {
            b5.value='x'
            ch=0;
            checkcondition();
        }
        //fourth button pressed start time
        else if(b1.value=='' && b2.value=='' && b3.value=='' && b4.value=='0' && b5.value=='' && b6.value==''
                && b7.value=='' && b8.value=='' &&  b9.value=='')
        {
            b3.value='x'
            ch=0;
            checkcondition();
        }

        //fifth button pressed start time
        else if(b1.value=='' && b2.value=='' && b3.value=='' && b4.value=='' && b5.value=='0' && b6.value==''
                && b7.value=='' && b8.value=='' &&  b9.value=='')
        {
            b7.value='x'
            ch=0;
            checkcondition();
        }

        //six button pressed start time
        else if(b1.value=='' && b2.value=='' && b3.value=='' && b4.value=='' && b5.value=='' && b6.value=='0'
                && b7.value=='' && b8.value=='' &&  b9.value=='')
        {
            b1.value='x'
            ch=0;
            checkcondition();
        }

        //seven button pressed start time
        else if(b1.value=='' && b2.value=='' && b3.value=='' && b4.value=='' && b5.value=='' && b6.value==''
                && b7.value=='0' && b8.value=='' &&  b9.value=='')
        {
            b5.value='x'
            ch=0;
            checkcondition();
        }

        //eight button pressed start time
        else if(b1.value=='' && b2.value=='' && b3.value=='' && b4.value=='' && b5.value=='' && b6.value==''
                && b7.value=='' && b8.value=='0' &&  b9.value=='')
        {
            b5.value='x'
            ch=0;
            checkcondition();
        }

        //nine button pressed start time
        else if(b1.value=='' && b2.value=='' && b3.value=='' && b4.value=='' && b5.value=='' && b6.value==''
                && b7.value=='' && b8.value=='' &&  b9.value=='0')
        {
            b5.value='x'
            ch=0;
            checkcondition();
        }

        
        // first row
        else if(b1.value=='0' && b2.value=='0' && b3.value=='')
        {
            b3.value='x'
            ch=0;
            checkcondition();
        }
        else if(b2.value=='0' && b3.value=='0' && b1.value=='')
        {
            b1.value='x'
            ch=0;
            checkcondition();
        }
        else if(b1.value=='0' && b3.value=='0' && b2.value=='')
        {
            b2.value='x'
            ch=0;
            checkcondition();
        }

        // second row
        else if(b4.value=='0' && b5.value=='0' && b6.value=='')
        {
            b6.value='x'
            ch=0;
            checkcondition();
        }
        else if(b5.value=='0' && b6.value=='0' && b4.value=='')
        {
            b4.value='x'
            ch=0;
            checkcondition();
        }
        else if(b4.value=='0' && b6.value=='0' && b5.value=='')
        {
            b5.value='x'
            ch=0;
            checkcondition();
        }

        // third row
        else if(b7.value=='0' && b8.value=='0' && b9.value=='')
        {
            b9.value='x'
            ch=0;
            checkcondition();
        }
        else if(b8.value=='0' && b9.value=='0' && b7.value=='')
        {
            b7.value='x'
            ch=0;
            checkcondition();
        }
        else if(b7.value=='0' && b9.value=='0' && b8.value=='')
        {
            b8.value='x'
            ch=0;
            checkcondition();
        }






        // first cols(1&4)
        else if(b1.value=='0' && b4.value=='0' && b7.value=='')
        {
            b7.value='x'
            ch=0;
            checkcondition();
        }

        else if(b1.value=='0' && b4.value=='0' && b2.value=='')
        {
            b2.value='x'
            ch=0;
            checkcondition();
        }

        else if(b1.value=='0' && b4.value=='0' && b3.value=='')
        {
            b3.value='x'
            ch=0;
            checkcondition();
        }

        else if(b1.value=='0' && b4.value=='0' && b5.value=='')
        {
            b5.value='x'
            ch=0;
            checkcondition();
        }
        else if(b1.value=='0' && b4.value=='0' && b6.value=='')
        {
            b6.value='x'
            ch=0;
            checkcondition();
        }
        else if(b1.value=='0' && b4.value=='0' && b8.value=='')
        {
            b8.value='x'
            ch=0;
            checkcondition();
        }
        else if(b1.value=='0' && b4.value=='0' && b9.value=='')
        {
            b9.value='x'
            ch=0;
            checkcondition();
        }

        // first row (4&7)
        else if(b4.value=='0' && b7.value=='0' && b1.value=='')
        {
            b1.value='x'
            ch=0;
            checkcondition();
        }
        else if(b4.value=='0' && b7.value=='0' && b2.value=='')
        {
            b2.value='x'
            ch=0;
            checkcondition();
        }
        else if(b4.value=='0' && b7.value=='0' && b3.value=='')
        {
            b3.value='x'
            ch=0;
            checkcondition();
        }
        else if(b4.value=='0' && b7.value=='0' && b5.value=='')
        {
            b5.value='x'
            ch=0;
            checkcondition();
        }
        else if(b4.value=='0' && b7.value=='0' && b6.value=='')
        {
            b6.value='x'
            ch=0;
            checkcondition();
        }
        else if(b4.value=='0' && b7.value=='0' && b8.value=='')
        {
            b8.value='x'
            ch=0;
            checkcondition();
        }
        else if(b4.value=='0' && b7.value=='0' && b9.value=='')
        {
            b9.value='x'
            ch=0;
            checkcondition();
        }

        //first row (1&7)
        else if(b1.value=='0' && b7.value=='0' && b4.value=='')
        {
            b4.value='x'
            ch=0;
            checkcondition();
        }
        else if(b1.value=='0' && b7.value=='0' && b2.value=='')
        {
            b2.value='x'
            ch=0;
            checkcondition();
        }
        else if(b1.value=='0' && b7.value=='0' && b3.value=='')
        {
            b3.value='x'
            ch=0;
            checkcondition();
        }
        else if(b1.value=='0' && b7.value=='0' && b5.value=='')
        {
            b5.value='x'
            ch=0;
            checkcondition();
        }
        else if(b1.value=='0' && b7.value=='0' && b6.value=='')
        {
            b6.value='x'
            ch=0;
            checkcondition();
        }
        else if(b1.value=='0' && b7.value=='0' && b8.value=='')
        {
            b8.value='x'
            ch=0;
            checkcondition();
        }
        else if(b1.value=='0' && b7.value=='0' && b9.value=='')
        {
            b9.value='x'
            ch=0;
            checkcondition();
        }

        // second cols(2&5)
        else if(b2.value=='0' && b5.value=='0' && b8.value=='')
        {
            b8.value='x'
            ch=0;
            checkcondition();
        }
        else if(b2.value=='0' && b5.value=='0' && b1.value=='')
        {
            b1.value='x'
            ch=0;
            checkcondition();
        }
        else if(b2.value=='0' && b5.value=='0' && b3.value=='')
        {
            b3.value='x'
            ch=0;
            checkcondition();
        }
        else if(b2.value=='0' && b5.value=='0' && b4.value=='')
        {
            b4.value='x'
            ch=0;
            checkcondition();
        }

        else if(b2.value=='0' && b5.value=='0' && b6.value=='')
        {
            b6.value='x'
            ch=0;
            checkcondition();
        }
        else if(b2.value=='0' && b5.value=='0' && b7.value=='')
        {
            b7.value='x'
            ch=0;
            checkcondition();
        }
        else if(b2.value=='0' && b5.value=='0' && b9.value=='')
        {
            b9.value='x'
            ch=0;
            checkcondition();
        }

        // second cols(5&8)
        else if(b5.value=='0' && b8.value=='0' && b2.value=='')
        {
            b2.value='x'
            ch=0;
            checkcondition();
        }
        else if(b5.value=='0' && b8.value=='0' && b1.value=='')
        {
            b1.value='x'
            ch=0;
            checkcondition();
        }
        else if(b5.value=='0' && b8.value=='0' && b3.value=='')
        {
            b3.value='x'
            ch=0;
            checkcondition();
        }
        else if(b5.value=='0' && b8.value=='0' && b4.value=='')
        {
            b4.value='x'
            ch=0;
            checkcondition();
        }
        else if(b5.value=='0' && b8.value=='0' && b6.value=='')
        {
            b6.value='x'
            ch=0;
            checkcondition();
        }
        else if(b5.value=='0' && b8.value=='0' && b7.value=='')
        {
            b7.value='x'
            ch=0;
            checkcondition();
        }
        else if(b5.value=='0' && b8.value=='0' && b9.value=='')
        {
            b9.value='x'
            ch=0;
            checkcondition();
        }

        // second cols(2&8)
        else if(b2.value=='0' && b8.value=='0' && b5.value=='')
        {
            b5.value='x'
            ch=0;
            checkcondition();
        }
        else if(b2.value=='0' && b8.value=='0' && b1.value=='')
        {
            b1.value='x'
            ch=0;
            checkcondition();
        }
        else if(b2.value=='0' && b8.value=='0' && b3.value=='')
        {
            b3.value='x'
            ch=0;
            checkcondition();
        }
        else if(b2.value=='0' && b8.value=='0' && b4.value=='')
        {
            b4.value='x'
            ch=0;
            checkcondition();
        }
        else if(b2.value=='0' && b8.value=='0' && b6.value=='')
        {
            b6.value='x'
            ch=0;
            checkcondition();
        }
        else if(b2.value=='0' && b8.value=='0' && b7.value=='')
        {
            b7.value='x'
            ch=0;
            checkcondition();
        }
        else if(b2.value=='0' && b8.value=='0' && b9.value=='')
        {
            b9.value='x'
            ch=0;
            checkcondition();
        }


        // third cols(3&6)
        else if(b3.value=='0' && b6.value=='0' && b9.value=='')
        {
            b9.value='x'
            ch=0;
            checkcondition();
        }
        else if(b3.value=='0' && b6.value=='0' && b1.value=='')
        {
            b1.value='x'
            ch=0;
            checkcondition();
        }
        else if(b3.value=='0' && b6.value=='0' && b2.value=='')
        {
            b2.value='x'
            ch=0;
            checkcondition();
        }
        else if(b3.value=='0' && b6.value=='0' && b4.value=='')
        {
            b4.value='x'
            ch=0;
            checkcondition();
        }
        else if(b3.value=='0' && b6.value=='0' && b5.value=='')
        {
            b5.value='x'
            ch=0;
            checkcondition();
        }
        else if(b3.value=='0' && b6.value=='0' && b7.value=='')
        {
            b7.value='x'
            ch=0;
            checkcondition();
        }
        else if(b3.value=='0' && b6.value=='0' && b8.value=='')
        {
            b8.value='x'
            ch=0;
            checkcondition();
        }

        // third cols(6&9)
        else if(b6.value=='0' && b9.value=='0' && b3.value=='')
        {
            b3.value='x'
            ch=0;
            checkcondition();
        }
        else if(b6.value=='0' && b9.value=='0' && b1.value=='')
        {
            b1.value='x'
            ch=0;
            checkcondition();
        }
        else if(b6.value=='0' && b9.value=='0' && b2.value=='')
        {
            b2.value='x'
            ch=0;
            checkcondition();
        }
        else if(b6.value=='0' && b9.value=='0' && b4.value=='')
        {
            b4.value='x'
            ch=0;
            checkcondition();
        }
        else if(b6.value=='0' && b9.value=='0' && b5.value=='')
        {
            b5.value='x'
            ch=0;
            checkcondition();
        }
        else if(b6.value=='0' && b9.value=='0' && b7.value=='')
        {
            b7.value='x'
            ch=0;
            checkcondition();
        }
        else if(b6.value=='0' && b9.value=='0' && b8.value=='')
        {
            b8.value='x'
            ch=0;
            checkcondition();
        }

        // third cols(3&9)
        else if(b3.value=='0' && b9.value=='0' && b6.value=='')
        {
            b6.value='x'
            ch=0;
            checkcondition();
        }
        else if(b3.value=='0' && b9.value=='0' && b1.value=='')
        {
            b1.value='x'
            ch=0;
            checkcondition();
        }
        else if(b3.value=='0' && b9.value=='0' && b2.value=='')
        {
            b2.value='x'
            ch=0;
            checkcondition();
        }
        else if(b3.value=='0' && b9.value=='0' && b4.value=='')
        {
            b4.value='x'
            ch=0;
            checkcondition();
        }
        else if(b3.value=='0' && b9.value=='0' && b5.value=='')
        {
            b5.value='x'
            ch=0;
            checkcondition();
        }
        else if(b3.value=='0' && b9.value=='0' && b7.value=='')
        {
            b7.value='x'
            ch=0;
            checkcondition();
        }
        else if(b3.value=='0' && b9.value=='0' && b8.value=='')
        {
            b8.value='x'
            ch=0;
            checkcondition();
        }

        //cross angle start (1&5)
        else if(b1.value=='0' && b5.value=='0' && b9.value=='')
        {
            b9.value='x'
            ch=0;
            checkcondition();
        }
        else if(b1.value=='0' && b5.value=='0' && b2.value=='')
        {
            b2.value='x'
            ch=0;
            checkcondition();
        }
        else if(b1.value=='0' && b5.value=='0' && b3.value=='')
        {
            b3.value='x'
            ch=0;
            checkcondition();
        }
        else if(b1.value=='0' && b5.value=='0' && b4.value=='')
        {
            b4.value='x'
            ch=0;
            checkcondition();
        }
        else if(b1.value=='0' && b5.value=='0' && b6.value=='')
        {
            b6.value='x'
            ch=0;
            checkcondition();
        }
        else if(b1.value=='0' && b5.value=='0' && b7.value=='')
        {
            b7.value='x'
            ch=0;
            checkcondition();
        }
        else if(b1.value=='0' && b5.value=='0' && b8.value=='')
        {
            b8.value='x'
            ch=0;
            checkcondition();
        }

        //cross angle start (5&9)
        else if(b5.value=='0' && b9.value=='0' && b1.value=='')
        {
            b1.value='x'
            ch=0;
            checkcondition();
        }
        else if(b5.value=='0' && b9.value=='0' && b2.value=='')
        {
            b2.value='x'
            ch=0;
            checkcondition();
        }
        else if(b5.value=='0' && b9.value=='0' && b3.value=='')
        {
            b3.value='x'
            ch=0;
            checkcondition();
        }
        else if(b5.value=='0' && b9.value=='0' && b4.value=='')
        {
            b4.value='x'
            ch=0;
            checkcondition();
        }
        else if(b5.value=='0' && b9.value=='0' && b6.value=='')
        {
            b6.value='x'
            ch=0;
            checkcondition();
        }
        else if(b5.value=='0' && b9.value=='0' && b7.value=='')
        {
            b7.value='x'
            ch=0;
            checkcondition();
        }
        else if(b5.value=='0' && b9.value=='0' && b8.value=='')
        {
            b8.value='x'
            ch=0;
            checkcondition();
        }




        //cross angle start (1&9)
        else if(b1.value=='0' && b9.value=='0' && b5.value=='')
        {
            b5.value='x'
            ch=0;
            checkcondition();
        }

        else if(b1.value=='0' && b9.value=='0' && b2.value=='')
        {
            b2.value='x'
            ch=0;
            checkcondition();
        }

        else if(b1.value=='0' && b9.value=='0' && b3.value=='')
        {
            b3.value='x'
            ch=0;
            checkcondition();
        }
        else if(b1.value=='0' && b9.value=='0' && b4.value=='')
        {
            b4.value='x'
            ch=0;
            checkcondition();
        }
        else if(b1.value=='0' && b9.value=='0' && b6.value=='')
        {
            b6.value='x'
            ch=0;
            checkcondition();
        }
        else if(b1.value=='0' && b9.value=='0' && b7.value=='')
        {
            b7.value='x'
            ch=0;
            checkcondition();
        }
        else if(b1.value=='0' && b9.value=='0' && b8.value=='')
        {
            b8.value='x'
            ch=0;
            checkcondition();
        }

        //cross angle end (7&5)
        else if(b7.value=='0' && b5.value=='0' && b3.value=='')
        {
            b3.value='x'
            ch=0;
            checkcondition();
        }

        else if(b7.value=='0' && b5.value=='0' && b1.value=='')
        {
            b1.value='x'
            ch=0;
            checkcondition();
        }
        else if(b7.value=='0' && b5.value=='0' && b2.value=='')
        {
            b2.value='x'
            ch=0;
            checkcondition();
        }
        else if(b7.value=='0' && b5.value=='0' && b4.value=='')
        {
            b4.value='x'
            ch=0;
            checkcondition();
        }
        else if(b7.value=='0' && b5.value=='0' && b6.value=='')
        {
            b6.value='x'
            ch=0;
            checkcondition();
        }
        else if(b7.value=='0' && b5.value=='0' && b8.value=='')
        {
            b8.value='x'
            ch=0;
            checkcondition();
        }
        else if(b7.value=='0' && b5.value=='0' && b9.value=='')
        {
            b9.value='x'
            ch=0;
            checkcondition();
        }





        //cross angle end (5&3)
        else if(b5.value=='0' && b3.value=='0' && b7.value=='')
        {
            b7.value='x'
            ch=0;
            checkcondition();
        }
        else if(b5.value=='0' && b3.value=='0' && b1.value=='')
        {
            b1.value='x'
            ch=0;
            checkcondition();
        }
        else if(b5.value=='0' && b3.value=='0' && b2.value=='')
        {
            b2.value='x'
            ch=0;
            checkcondition();
        }
        else if(b5.value=='0' && b3.value=='0' && b4.value=='')
        {
            b4.value='x'
            ch=0;
            checkcondition();
        }
        else if(b5.value=='0' && b3.value=='0' && b6.value=='')
        {
            b6.value='x'
            ch=0;
            checkcondition();
        }
        else if(b5.value=='0' && b3.value=='0' && b8.value=='')
        {
            b8.value='x'
            ch=0;
            checkcondition();
        }
        else if(b5.value=='0' && b3.value=='0' && b9.value=='')
        {
            b9.value='x'
            ch=0;
            checkcondition();
        }


        //cross angle end (7&3)

        else if(b7.value=='0' && b3.value=='0' && b6.value=='')
        {
            b6.value='x'
            ch=0;
            checkcondition();
        }

        else if(b7.value=='0' && b3.value=='0' && b5.value=='')
        {
            b5.value='x'
            ch=0;
            checkcondition();
        }
        else if(b7.value=='0' && b3.value=='0' && b1.value=='')
        {
            b1.value='x'
            ch=0;
            checkcondition();
        }
        else if(b7.value=='0' && b3.value=='0' && b2.value=='')
        {
            b2.value='x'
            ch=0;
            checkcondition();
        }
        else if(b7.value=='0' && b3.value=='0' && b4.value=='')
        {
            b4.value='x'
            ch=0;
            checkcondition();
        }

        else if(b7.value=='0' && b3.value=='0' && b8.value=='')
        {
            b8.value='x'
            ch=0;
            checkcondition();
        }
        else if(b7.value=='0' && b3.value=='0' && b9.value=='')
        {
            b9.value='x'
            ch=0;
            checkcondition();
        }



        //unpaired condition for 1 (1&8)

        else if(b1.value=='0' && b6.value=='0' && b2.value=='')
        {
            b2.value='x'
            ch=0;
            checkcondition();
        }
        else if(b1.value=='0' && b6.value=='0' && b3.value=='')
        {
            b3.value='x'
            ch=0;
            checkcondition();
        }
        else if(b1.value=='0' && b6.value=='0' && b4.value=='')
        {
            b4.value='x'
            ch=0;
            checkcondition();
        }
        else if(b1.value=='0' && b6.value=='0' && b5.value=='')
        {
            b5.value='x'
            ch=0;
            checkcondition();
        }
        else if(b1.value=='0' && b6.value=='0' && b7.value=='')
        {
            b7.value='x'
            ch=0;
            checkcondition();
        }
        else if(b1.value=='0' && b6.value=='0' && b8.value=='')
        {
            b8.value='x'
            ch=0;
            checkcondition();
        }
        else if(b1.value=='0' && b6.value=='0' && b9.value=='')
        {
            b9.value='x'
            ch=0;
            checkcondition();
        }


        //unpaired condition for 1 (1&8)

        else if(b1.value=='0' && b8.value=='0' && b2.value=='')
        {
            b2.value='x'
            ch=0;
            checkcondition();
        }
        else if(b1.value=='0' && b8.value=='0' && b3.value=='')
        {
            b3.value='x'
            ch=0;
            checkcondition();
        }
        else if(b1.value=='0' && b8.value=='0' && b4.value=='')
        {
            b4.value='x'
            ch=0;
            checkcondition();
        }
        else if(b1.value=='0' && b8.value=='0' && b5.value=='')
        {
            b5.value='x'
            ch=0;
            checkcondition();
        }
        else if(b1.value=='0' && b8.value=='0' && b7.value=='')
        {
            b7.value='x'
            ch=0;
            checkcondition();
        }
        else if(b1.value=='0' && b8.value=='0' && b6.value=='')
        {
            b6.value='x'
            ch=0;
            checkcondition();
        }
        else if(b1.value=='0' && b8.value=='0' && b9.value=='')
        {
            b9.value='x'
            ch=0;
            checkcondition();
        }

        // unpaired 2,4,6,7,9 (2&4)

        else if(b2.value=='0' && b4.value=='0' && b1.value=='')
        {
            b1.value='x'
            ch=0;
            checkcondition();
        }
        else if(b2.value=='0' && b4.value=='0' && b3.value=='')
        {
            b3.value='x'
            ch=0;
            checkcondition();
        }
        else if(b2.value=='0' && b4.value=='0' && b5.value=='')
        {
            b5.value='x'
            ch=0;
            checkcondition();
        }
        else if(b2.value=='0' && b4.value=='0' && b6.value=='')
        {
            b6.value='x'
            ch=0;
            checkcondition();
        }
        else if(b2.value=='0' && b4.value=='0' && b7.value=='')
        {
            b7.value='x'
            ch=0;
            checkcondition();
        }
        else if(b2.value=='0' && b4.value=='0' && b8.value=='')
        {
            b1.value='x'
            ch=0;
            checkcondition();
        }
        else if(b2.value=='0' && b4.value=='0' && b9.value=='')
        {
            b1.value='x'
            ch=0;
            checkcondition();
        }

        // unpaired 2,4,6,7,9 (2&6)

        else if(b2.value=='0' && b6.value=='0' && b5.value=='')
        {
            b5.value='x'
            ch=0;
            checkcondition();
        }
        else if(b2.value=='0' && b6.value=='0' && b1.value=='')
        {
            b1.value='x'
            ch=0;
            checkcondition();
        }
        else if(b2.value=='0' && b6.value=='0' && b3.value=='')
        {
            b3.value='x'
            ch=0;
            checkcondition();
        }
        else if(b2.value=='0' && b6.value=='0' && b4.value=='')
        {
            b4.value='x'
            ch=0;
            checkcondition();
        }

        else if(b2.value=='0' && b6.value=='0' && b7.value=='')
        {
            b7.value='x'
            ch=0;
            checkcondition();
        }
        else if(b2.value=='0' && b6.value=='0' && b8.value=='')
        {
            b8.value='x'
            ch=0;
            checkcondition();
        }
        else if(b2.value=='0' && b6.value=='0' && b9.value=='')
        {
            b9.value='x'
            ch=0;
            checkcondition();
        }

        // unpaired 2,4,6,7,9 (2&7)

        else if(b2.value=='0' && b7.value=='0' && b1.value=='')
        {
            b1.value='x'
            ch=0;
            checkcondition();
        }
        else if(b2.value=='0' && b7.value=='0' && b3.value=='')
        {
            b3.value='x'
            ch=0;
            checkcondition();
        }
        else if(b2.value=='0' && b7.value=='0' && b4.value=='')
        {
            b4.value='x'
            ch=0;
            checkcondition();
        }
        else if(b2.value=='0' && b7.value=='0' && b5.value=='')
        {
            b5.value='x'
            ch=0;
            checkcondition();
        }
        else if(b2.value=='0' && b7.value=='0' && b6.value=='')
        {
            b6.value='x'
            ch=0;
            checkcondition();
        }
        else if(b2.value=='0' && b7.value=='0' && b8.value=='')
        {
            b8.value='x'
            ch=0;
            checkcondition();
        }
        else if(b2.value=='0' && b7.value=='0' && b9.value=='')
        {
            b9.value='x'
            ch=0;
            checkcondition();
        }


        // unpaired 2,4,6,7,9 (2&9)

        else if(b2.value=='0' && b9.value=='0' && b1.value=='')
        {
            b1.value='x'
            ch=0;
            checkcondition();
        }
        else if(b2.value=='0' && b9.value=='0' && b3.value=='')
        {
            b3.value='x'
            ch=0;
            checkcondition();
        }
        else if(b2.value=='0' && b9.value=='0' && b4.value=='')
        {
            b4.value='x'
            ch=0;
            checkcondition();
        }
        else if(b2.value=='0' && b9.value=='0' && b5.value=='')
        {
            b5.value='x'
            ch=0;
            checkcondition();
        }
        else if(b2.value=='0' && b9.value=='0' && b6.value=='')
        {
            b6.value='x'
            ch=0;
            checkcondition();
        }
        else if(b2.value=='0' && b9.value=='0' && b7.value=='')
        {
            b7.value='x'
            ch=0;
            checkcondition();
        }
        else if(b2.value=='0' && b7.value=='0' && b8.value=='')
        {
            b8.value='x'
            ch=0;
            checkcondition();
        }

        //unpaired 3,4 (3&4)

        else if(b3.value=='0' && b4.value=='0' && b1.value=='')
        {
            b1.value='x'
            ch=0;
            checkcondition();
        }
        else if(b3.value=='0' && b4.value=='0' && b2.value=='')
        {
            b2.value='x'
            ch=0;
            checkcondition();
        }
        else if(b3.value=='0' && b4.value=='0' && b5.value=='')
        {
            b5.value='x'
            ch=0;
            checkcondition();
        }
        else if(b3.value=='0' && b4.value=='0' && b6.value=='')
        {
            b6.value='x'
            ch=0;
            checkcondition();
        }
        else if(b3.value=='0' && b4.value=='0' && b7.value=='')
        {
            b7.value='x'
            ch=0;
            checkcondition();
        }
        else if(b3.value=='0' && b4.value=='0' && b8.value=='')
        {
            b8.value='x'
            ch=0;
            checkcondition();
        }
        else if(b3.value=='0' && b4.value=='0' && b9.value=='')
        {
            b9.value='x'
            ch=0;
            checkcondition();
        }

        // 3,8,5


        // unpaired 3,8 (3&8)

        else if(b3.value=='0' && b8.value=='0' && b9.value=='')
        {
            b9.value='x'
            ch=0;
            checkcondition();
        }

        else if(b3.value=='0' && b8.value=='0' && b1.value=='')
        {
            b1.value='x'
            ch=0;
            checkcondition();
        }
        else if(b3.value=='0' && b8.value=='0' && b2.value=='')
        {
            b2.value='x'
            ch=0;
            checkcondition();
        }
        else if(b3.value=='0' && b8.value=='0' && b4.value=='')
        {
            b4.value='x'
            ch=0;
            checkcondition();
        }
        else if(b3.value=='0' && b8.value=='0' && b5.value=='')
        {
            b5.value='x'
            ch=0;
            checkcondition();
        }
        else if(b3.value=='0' && b8.value=='0' && b6.value=='')
        {
            b6.value='x'
            ch=0;
            checkcondition();
        }
        else if(b3.value=='0' && b8.value=='0' && b7.value=='')
        {
            b7.value='x'
            ch=0;
            checkcondition();
        }
        

        // unpaired 4,2,3,8,9 (4&2)

        else if(b4.value=='0' && b2.value=='0' && b1.value=='')
        {
            b1.value='x'
            ch=0;
            checkcondition();
        }
        else if(b4.value=='0' && b2.value=='0' && b3.value=='')
        {
            b3.value='x'
            ch=0;
            checkcondition();
        }
        else if(b4.value=='0' && b2.value=='0' && b5.value=='')
        {
            b5.value='x'
            ch=0;
            checkcondition();
        }
        else if(b4.value=='0' && b2.value=='0' && b6.value=='')
        {
            b6.value='x'
            ch=0;
            checkcondition();
        }
        else if(b4.value=='0' && b2.value=='0' && b7.value=='')
        {
            b7.value='x'
            ch=0;
            checkcondition();
        }
        else if(b4.value=='0' && b2.value=='0' && b8.value=='')
        {
            b8.value='x'
            ch=0;
            checkcondition();
        }
        else if(b4.value=='0' && b2.value=='0' && b9.value=='')
        {
            b9.value='x'
            ch=0;
            checkcondition();
        }

        // unpaired 4,2,3,8,9 (4&3)

        else if(b4.value=='0' && b3.value=='0' && b1.value=='')
        {
            b1.value='x'
            ch=0;
            checkcondition();
        }
        else if(b4.value=='0' && b3.value=='0' && b2.value=='')
        {
            b2.value='x'
            ch=0;
            checkcondition();
        }
        else if(b4.value=='0' && b3.value=='0' && b5.value=='')
        {
            b5.value='x'
            ch=0;
            checkcondition();
        }
        else if(b4.value=='0' && b3.value=='0' && b6.value=='')
        {
            b6.value='x'
            ch=0;
            checkcondition();
        }
        else if(b4.value=='0' && b3.value=='0' && b7.value=='')
        {
            b7.value='x'
            ch=0;
            checkcondition();
        }
        else if(b4.value=='0' && b3.value=='0' && b8.value=='')
        {
            b8.value='x'
            ch=0;
            checkcondition();
        }
        else if(b4.value=='0' && b3.value=='0' && b9.value=='')
        {
            b9.value='x'
            ch=0;
            checkcondition();
        }

        // unpaired 4,2,3,8,9 (4&8)

        else if(b4.value=='0' && b8.value=='0' && b1.value=='')
        {
            b1.value='x'
            ch=0;
            checkcondition();
        }
        else if(b4.value=='0' && b8.value=='0' && b2.value=='')
        {
            b2.value='x'
            ch=0;
            checkcondition();
        }
        else if(b4.value=='0' && b8.value=='0' && b3.value=='')
        {
            b3.value='x'
            ch=0;
            checkcondition();
        }
        else if(b4.value=='0' && b8.value=='0' && b5.value=='')
        {
            b5.value='x'
            ch=0;
            checkcondition();
        }
        else if(b4.value=='0' && b8.value=='0' && b6.value=='')
        {
            b6.value='x'
            ch=0;
            checkcondition();
        }
        else if(b4.value=='0' && b8.value=='0' && b7.value=='')
        {
            b7.value='x'
            ch=0;
            checkcondition();
        }
        else if(b4.value=='0' && b8.value=='0' && b9.value=='')
        {
            b9.value='x'
            ch=0;
            checkcondition();
        }

        // unpaired 4,2,3,8,9 (4&9)

        else if(b4.value=='0' && b9.value=='0' && b1.value=='')
        {
            b1.value='x'
            ch=0;
            checkcondition();
        }
        else if(b4.value=='0' && b9.value=='0' && b2.value=='')
        {
            b2.value='x'
            ch=0;
            checkcondition();
        }
        else if(b4.value=='0' && b9.value=='0' && b3.value=='')
        {
            b3.value='x'
            ch=0;
            checkcondition();
        }
        else if(b4.value=='0' && b9.value=='0' && b5.value=='')
        {
            b5.value='x'
            ch=0;
            checkcondition();
        }
        else if(b4.value=='0' && b9.value=='0' && b6.value=='')
        {
            b6.value='x'
            ch=0;
            checkcondition();
        }
        else if(b4.value=='0' && b9.value=='0' && b7.value=='')
        {
            b7.value='x'
            ch=0;
            checkcondition();
        }
        else if(b4.value=='0' && b9.value=='0' && b8.value=='')
        {
            b8.value='x'
            ch=0;
            checkcondition();
        }


        // unpaired 6,1,2,7,8 (6,1)
        else if(b6.value=='0' && b1.value=='0' && b2.value=='')
        {
            b2.value='x'
            ch=0;
            checkcondition();
        }

        else if(b6.value=='0' && b1.value=='0' && b3.value=='')
        {
            b3.value='x'
            ch=0;
            checkcondition();
        }

        else if(b6.value=='0' && b1.value=='0' && b4.value=='')
        {
            b4.value='x'
            ch=0;
            checkcondition();
        }

        else if(b6.value=='0' && b1.value=='0' && b5.value=='')
        {
            b5.value='x'
            ch=0;
            checkcondition();
        }

        else if(b6.value=='0' && b1.value=='0' && b7.value=='')
        {
            b7.value='x'
            ch=0;
            checkcondition();
        }

        else if(b6.value=='0' && b1.value=='0' && b8.value=='')
        {
            b8.value='x'
            ch=0;
            checkcondition();
        }

        else if(b6.value=='0' && b1.value=='0' && b9.value=='')
        {
            b9.value='x'
            ch=0;
            checkcondition();
        }


        // unpaired 6,1,2,7,8 (6,2)
        else if(b6.value=='0' && b2.value=='0' && b1.value=='')
        {
            b1.value='x'
            ch=0;
            checkcondition();
        }

        else if(b6.value=='0' && b2.value=='0' && b3.value=='')
        {
            b3.value='x'
            ch=0;
            checkcondition();
        }
        else if(b6.value=='0' && b2.value=='0' && b4.value=='')
        {
            b4.value='x'
            ch=0;
            checkcondition();
        }
        else if(b6.value=='0' && b2.value=='0' && b5.value=='')
        {
            b5.value='x'
            ch=0;
            checkcondition();
        }
        else if(b6.value=='0' && b2.value=='0' && b7.value=='')
        {
            b7.value='x'
            ch=0;
            checkcondition();
        }
        else if(b6.value=='0' && b2.value=='0' && b8.value=='')
        {
            b8.value='x'
            ch=0;
            checkcondition();
        }
        else if(b6.value=='0' && b2.value=='0' && b9.value=='')
        {
            b9.value='x'
            ch=0;
            checkcondition();
        }

        // unpaired 6,1,2,7,8 (6,7)
        else if(b6.value=='0' && b7.value=='0' && b1.value=='')
        {
            b1.value='x'
            ch=0;
            checkcondition();
        }

        else if(b6.value=='0' && b7.value=='0' && b2.value=='')
        {
            b2.value='x'
            ch=0;
            checkcondition();
        }
        else if(b6.value=='0' && b7.value=='0' && b3.value=='')
        {
            b3.value='x'
            ch=0;
            checkcondition();
        }
        else if(b6.value=='0' && b7.value=='0' && b4.value=='')
        {
            b4.value='x'
            ch=0;
            checkcondition();
        }
        else if(b6.value=='0' && b7.value=='0' && b5.value=='')
        {
            b5.value='x'
            ch=0;
            checkcondition();
        }
        else if(b6.value=='0' && b7.value=='0' && b8.value=='')
        {
            b8.value='x'
            ch=0;
            checkcondition();
        }
        else if(b6.value=='0' && b7.value=='0' && b9.value=='')
        {
            b9.value='x'
            ch=0;
            checkcondition();
        }

        // unpaired 6,1,2,7,8 (6&8)
        else if(b6.value=='0' && b8.value=='0' && b1.value=='')
        {
            b1.value='x'
            ch=0;
            checkcondition();
        }
        else if(b6.value=='0' && b8.value=='0' && b2.value=='')
        {
            b2.value='x'
            ch=0;
            checkcondition();
        }
        else if(b6.value=='0' && b8.value=='0' && b3.value=='')
        {
            b3.value='x'
            ch=0;
            checkcondition();
        }
        else if(b6.value=='0' && b8.value=='0' && b4.value=='')
        {
            b4.value='x'
            ch=0;
            checkcondition();
        }
        else if(b6.value=='0' && b8.value=='0' && b5.value=='')
        {
            b5.value='x'
            ch=0;
            checkcondition();
        }
        else if(b6.value=='0' && b8.value=='0' && b7.value=='')
        {
            b7.value='x'
            ch=0;
            checkcondition();
        }
        else if(b6.value=='0' && b8.value=='0' && b9.value=='')
        {
            b9.value='x'
            ch=0;
            checkcondition();
        }


        // unpaired 7,2,6 (7&2)

        else if(b7.value=='0' && b2.value=='0' && b1.value=='')
        {
            b1.value='x'
            ch=0;
            checkcondition();
        }
        else if(b7.value=='0' && b2.value=='0' && b3.value=='')
        {
            b3.value='x'
            ch=0;
            checkcondition();
        }
        else if(b7.value=='0' && b2.value=='0' && b4.value=='')
        {
            b4.value='x'
            ch=0;
            checkcondition();
        }
        else if(b7.value=='0' && b2.value=='0' && b5.value=='')
        {
            b5.value='x'
            ch=0;
            checkcondition();
        }
        else if(b7.value=='0' && b2.value=='0' && b6.value=='')
        {
            b6.value='x'
            ch=0;
            checkcondition();
        }
        else if(b7.value=='0' && b2.value=='0' && b8.value=='')
        {
            b8.value='x'
            ch=0;
            checkcondition();
        }
        else if(b7.value=='0' && b2.value=='0' && b9.value=='')
        {
            b9.value='x'
            ch=0;
            checkcondition();
        }

        // unpaired 7,2,6 (7&6)

        else if(b7.value=='0' && b6.value=='0' && b1.value=='')
        {
            b1.value='x'
            ch=0;
            checkcondition();
        }
        else if(b7.value=='0' && b6.value=='0' && b2.value=='')
        {
            b2.value='x'
            ch=0;
            checkcondition();
        }
        else if(b7.value=='0' && b6.value=='0' && b3.value=='')
        {
            b3.value='x'
            ch=0;
            checkcondition();
        }
        else if(b7.value=='0' && b6.value=='0' && b4.value=='')
        {
            b4.value='x'
            ch=0;
            checkcondition();
        }
        else if(b7.value=='0' && b6.value=='0' && b5.value=='')
        {
            b5.value='x'
            ch=0;
            checkcondition();
        }
        else if(b7.value=='0' && b6.value=='0' && b8.value=='')
        {
            b8.value='x'
            ch=0;
            checkcondition();
        }
        else if(b7.value=='0' && b6.value=='0' && b9.value=='')
        {
            b9.value='x'
            ch=0;
            checkcondition();
        }

        // unpaired 8,1,3,4,6 (8&1)

        else if(b8.value=='0' && b1.value=='0' && b2.value=='')
        {
            b2.value='x'
            ch=0;
            checkcondition();
        }

        else if(b8.value=='0' && b1.value=='0' && b3.value=='')
        {
            b3.value='x'
            ch=0;
            checkcondition();
        }
        else if(b8.value=='0' && b1.value=='0' && b4.value=='')
        {
            b4.value='x'
            ch=0;
            checkcondition();
        }
        else if(b8.value=='0' && b1.value=='0' && b5.value=='')
        {
            b5.value='x'
            ch=0;
            checkcondition();
        }
        else if(b8.value=='0' && b1.value=='0' && b6.value=='')
        {
            b6.value='x'
            ch=0;
            checkcondition();
        }
        else if(b8.value=='0' && b1.value=='0' && b7.value=='')
        {
            b7.value='x'
            ch=0;
            checkcondition();
        }
        else if(b8.value=='0' && b1.value=='0' && b9.value=='')
        {
            b9.value='x'
            ch=0;
            checkcondition();
        }

        // unpaired 8,1,3,4,6 (8&3)

        else if(b8.value=='0' && b3.value=='0' && b1.value=='')
        {
            b1.value='x'
            ch=0;
            checkcondition();
        }
        else if(b8.value=='0' && b3.value=='0' && b2.value=='')
        {
            b2.value='x'
            ch=0;
            checkcondition();
        }
        else if(b8.value=='0' && b3.value=='0' && b4.value=='')
        {
            b4.value='x'
            ch=0;
            checkcondition();
        }
        else if(b8.value=='0' && b3.value=='0' && b5.value=='')
        {
            b5.value='x'
            ch=0;
            checkcondition();
        }
        else if(b8.value=='0' && b3.value=='0' && b6.value=='')
        {
            b6.value='x'
            ch=0;
            checkcondition();
        }
        else if(b8.value=='0' && b3.value=='0' && b7.value=='')
        {
            b7.value='x'
            ch=0;
            checkcondition();
        }
        else if(b8.value=='0' && b3.value=='0' && b9.value=='')
        {
            b9.value='x'
            ch=0;
            checkcondition();
        }

        // unpaired 8,1,3,4,6 (8&4)

        else if(b8.value=='0' && b4.value=='0' && b1.value=='')
        {
            b1.value='x'
            ch=0;
            checkcondition();
        }
        else if(b8.value=='0' && b4.value=='0' && b2.value=='')
        {
            b2.value='x'
            ch=0;
            checkcondition();
        }
        else if(b8.value=='0' && b4.value=='0' && b3.value=='')
        {
            b3.value='x'
            ch=0;
            checkcondition();
        }
        else if(b8.value=='0' && b4.value=='0' && b5.value=='')
        {
            b5.value='x'
            ch=0;
            checkcondition();
        }
        else if(b8.value=='0' && b4.value=='0' && b6.value=='')
        {
            b6.value='x'
            ch=0;
            checkcondition();
        }
        else if(b8.value=='0' && b4.value=='0' && b7.value=='')
        {
            b7.value='x'
            ch=0;
            checkcondition();
        }
        else if(b8.value=='0' && b4.value=='0' && b9.value=='')
        {
            b9.value='x'
            ch=0;
            checkcondition();
        }

        // unpaired 8,1,3,4,6 (8&6)

        else if(b8.value=='0' && b6.value=='0' && b1.value=='')
        {
            b1.value='x'
            ch=0;
            checkcondition();
        }
        else if(b8.value=='0' && b6.value=='0' && b2.value=='')
        {
            b2.value='x'
            ch=0;
            checkcondition();
        }
        else if(b8.value=='0' && b6.value=='0' && b3.value=='')
        {
            b3.value='x'
            ch=0;
            checkcondition();
        }
        else if(b8.value=='0' && b6.value=='0' && b4.value=='')
        {
            b4.value='x'
            ch=0;
            checkcondition();
        }
        else if(b8.value=='0' && b6.value=='0' && b5.value=='')
        {
            b5.value='x'
            ch=0;
            checkcondition();
        }
        else if(b8.value=='0' && b6.value=='0' && b7.value=='')
        {
            b7.value='x'
            ch=0;
            checkcondition();
        }
        else if(b8.value=='0' && b6.value=='0' && b9.value=='')
        {
            b9.value='x'
            ch=0;
            checkcondition();
        }


        // unpaired 9,2 (9&2)

        else if(b9.value=='0' && b2.value=='0' && b1.value=='')
        {
            b1.value='x'
            ch=0;
            checkcondition();
        }
        else if(b9.value=='0' && b2.value=='0' && b3.value=='')
        {
            b3.value='x'
            ch=0;
            checkcondition();
        }
        else if(b9.value=='0' && b2.value=='0' && b4.value=='')
        {
            b4.value='x'
            ch=0;
            checkcondition();
        }
        else if(b9.value=='0' && b2.value=='0' && b5.value=='')
        {
            b5.value='x'
            ch=0;
            checkcondition();
        }
        else if(b9.value=='0' && b2.value=='0' && b6.value=='')
        {
            b6.value='x'
            ch=0;
            checkcondition();
        }
        else if(b9.value=='0' && b2.value=='0' && b7.value=='')
        {
            b7.value='x'
            ch=0;
            checkcondition();
        }
        else if(b9.value=='0' && b2.value=='0' && b8.value=='')
        {
            b8.value='x'
            ch=0;
            checkcondition();
        }

        // unpaired 9,2 (9&4)

        else if(b9.value=='0' && b4.value=='0' && b1.value=='')
        {
            b1.value='x'
            ch=0;
            checkcondition();
        }
        else if(b9.value=='0' && b4.value=='0' && b2.value=='')
        {
            b2.value='x'
            ch=0;
            checkcondition();
        }
        else if(b9.value=='0' && b4.value=='0' && b3.value=='')
        {
            b3.value='x'
            ch=0;
            checkcondition();
        }
        else if(b9.value=='0' && b4.value=='0' && b5.value=='')
        {
            b5.value='x'
            ch=0;
            checkcondition();
        }
        else if(b9.value=='0' && b4.value=='0' && b6.value=='')
        {
            b6.value='x'
            ch=0;
            checkcondition();
        }
        else if(b9.value=='0' && b4.value=='0' && b7.value=='')
        {
            b7.value='x'
            ch=0;
            checkcondition();
        }
        else if(b9.value=='0' && b4.value=='0' && b8.value=='')
        {
            b8.value='x'
            ch=0;
            checkcondition();
        }

        // addition input

        else if(b2.value=='0' && b1.value=='0' && b7.value=='')
        {
            b7.value='x'
            ch=0;
            checkcondition();
        }
















    }




    /* system input() closed */



    // function for check who win
    function checkcondition()
    {
        // condition for 0 row 1
        if(b1.value=='0' && b2.value=='0' && b3.value=='0')
        {
            b1.style.backgroundColor = "#09ad01";
            b2.style.backgroundColor = "#09ad01";
            b3.style.backgroundColor = "#09ad01";

            disable();
            
            alert("Player 0 wins");

            return false;
        }

        // condition for 0 row 2
        if(b4.value=='0' && b5.value=='0' && b6.value=='0')
        {
            b4.style.backgroundColor = "#09ad01";
            b5.style.backgroundColor = "#09ad01";
            b6.style.backgroundColor = "#09ad01";

            disable();
            
            alert("Player 0 wins");
            return false;
        }

        // condition for 0 row 3
        if(b7.value=='0' && b8.value=='0' && b9.value=='0')
        {
            b7.style.backgroundColor = "#09ad01";
            b8.style.backgroundColor = "#09ad01";
            b9.style.backgroundColor = "#09ad01";

            disable();
            
            alert("Player 0 wins");
            return false;
        }

        // condition for 0 col 1
        if(b1.value=='0' && b4.value=='0' && b7.value=='0')
        {
            b1.style.backgroundColor = "#09ad01";
            b4.style.backgroundColor = "#09ad01";
            b7.style.backgroundColor = "#09ad01";

            disable();
            
            alert("Player 0 wins");
            return false;
        }

        // condition for 0 col 2
        if(b2.value=='0' && b5.value=='0' && b8.value=='0')
        {
            b2.style.backgroundColor = "#09ad01";
            b5.style.backgroundColor = "#09ad01";
            b8.style.backgroundColor = "#09ad01";

            disable();
            
            alert("Player 0 wins");
            return false;
        }

        // condition for 0 col 3
        if(b3.value=='0' && b6.value=='0' && b9.value=='0')
        {
            b3.style.backgroundColor = "#09ad01";
            b6.style.backgroundColor = "#09ad01";
            b9.style.backgroundColor = "#09ad01";

            disable();
            
            alert("Player 0 wins");
            return false;
        }

        // condition for 0 diagonal
        if(b1.value=='0' && b5.value=='0' && b9.value=='0')
        {
            b1.style.backgroundColor = "#09ad01";
            b5.style.backgroundColor = "#09ad01";
            b9.style.backgroundColor = "#09ad01";

            disable();
            
            alert("Player 0 wins");
            return false;
        }

        // condition for 0 row 3
        if(b7.value=='0' && b5.value=='0' && b3.value=='0')
        {
            b7.style.backgroundColor = "#09ad01";
            b5.style.backgroundColor = "#09ad01";
            b3.style.backgroundColor = "#09ad01";

            disable();
            
            alert("Player 0 wins");
            return false;
        }


        // condition for X
        // condition for x row 1
        if(b1.value=='x' && b2.value=='x' && b3.value=='x')
        {
            b1.style.backgroundColor = "#09ad01";
            b2.style.backgroundColor = "#09ad01";
            b3.style.backgroundColor = "#09ad01";

            disable();
            
            alert("Player x wins");
        }

        // condition for x row 2
        if(b4.value=='x' && b5.value=='x' && b6.value=='x')
        {
            b4.style.backgroundColor = "#09ad01";
            b5.style.backgroundColor = "#09ad01";
            b6.style.backgroundColor = "#09ad01";

            disable();
            
            alert("Player x wins");
        }

        // condition for x row 3
        if(b7.value=='x' && b8.value=='x' && b9.value=='x')
        {
            b7.style.backgroundColor = "#09ad01";
            b8.style.backgroundColor = "#09ad01";
            b9.style.backgroundColor = "#09ad01";

            disable();
            
            alert("Player x wins");
        }

        // condition for x col 1
        if(b1.value=='x' && b4.value=='x' && b7.value=='x')
        {
            b1.style.backgroundColor = "#09ad01";
            b4.style.backgroundColor = "#09ad01";
            b7.style.backgroundColor = "#09ad01";

            disable();
            
            alert("Player x wins");
        }

        // condition for x col 2
        if(b2.value=='x' && b5.value=='x' && b8.value=='x')
        {
            b2.style.backgroundColor = "#09ad01";
            b5.style.backgroundColor = "#09ad01";
            b8.style.backgroundColor = "#09ad01";

            disable();
            
            alert("Player x wins");
        }

        // condition for x col 3
        if(b3.value=='x' && b6.value=='x' && b9.value=='x')
        {
            b3.style.backgroundColor = "#09ad01";
            b6.style.backgroundColor = "#09ad01";
            b9.style.backgroundColor = "#09ad01";

            disable();
            
            alert("Player x wins");
        }

        // condition for x diagonal
        if(b1.value=='x' && b5.value=='x' && b9.value=='x')
        {
            b1.style.backgroundColor = "#09ad01";
            b5.style.backgroundColor = "#09ad01";
            b9.style.backgroundColor = "#09ad01";

            disable();
            
            alert("Player x wins");
        }

        // condition for x diagonal
        if(b7.value=='x' && b5.value=='x' && b3.value=='x')
        {
            b7.style.backgroundColor = "#09ad01";
            b5.style.backgroundColor = "#09ad01";
            b3.style.backgroundColor = "#09ad01";

            disable();
            
            alert("Player x wins");
        }

    }


    // function for input after clicking button b1
    b1.onclick = function()
    {
        if(b1.value=='')
        {
            if(ch==0)
            {
                ch=1;
                b1.value='0';
                if(checkcondition()!=false)
                {
                    systemInput();
                }
                
            }
            else
            {
                ch=0;
                b1.value='x';
                if(checkcondition()!=false)
                {
                    systemInput();
                }
            }
        }
    }

    // function for input after clicking button b2
    b2.onclick = function()
    {
        if(b2.value=='')
        {
            if(ch==0)
            {
                ch=1;
                b2.value='0';
                if(checkcondition()!=false)
                {
                    systemInput();
                }
            }
            else
            {
                ch=0;
                b2.value='x';
                if(checkcondition()!=false)
                {
                    systemInput();
                }
            }
        }
    }

    // function for input after clicking button b3
    b3.onclick = function()
    {
        if(b3.value=='')
        {
            if(ch==0)
            {
                ch=1;
                b3.value='0';
                if(checkcondition()!=false)
                {
                    systemInput();
                }
            }
            else
            {
                ch=0;
                b3.value='x';
                if(checkcondition()!=false)
                {
                    systemInput();
                }
            }
        }
    }

    // function for input after clicking button b4
    b4.onclick = function()
    {
        if(b4.value=='')
        {
            if(ch==0)
            {
                ch=1;
                b4.value='0';
                if(checkcondition()!=false)
                {
                    systemInput();
                }
            }
            else
            {
                ch=0;
                b4.value='x';
                if(checkcondition()!=false)
                {
                    systemInput();
                }
            }
        }
    }

    // function for input after clicking button b5
    b5.onclick = function()
    {
        if(b5.value=='')
        {
            if(ch==0)
            {
                ch=1;
                b5.value='0';
                if(checkcondition()!=false)
                {
                    systemInput();
                }
            }
            else
            {
                ch=0;
                b5.value='x';
                if(checkcondition()!=false)
                {
                    systemInput();
                }
            }
        }
    }

    // function for input after clicking button b6
    b6.onclick = function()
    {
        if(b6.value=='')
        {
            if(ch==0)
            {
                ch=1;
                b6.value='0';
                if(checkcondition()!=false)
                {
                    systemInput();
                }
            }
            else
            {
                ch=0;
                b6.value='x';
                if(checkcondition()!=false)
                {
                    systemInput();
                }
            }
        }
    }

    // function for input after clicking button b7
    b7.onclick = function()
    {
        if(b7.value=='')
        {
            if(ch==0)
            {
                ch=1;
                b7.value='0';
                if(checkcondition()!=false)
                {
                    systemInput();
                }
            }
            else
            {
                ch=0;
                b7.value='x';
                if(checkcondition()!=false)
                {
                    systemInput();
                }
            }
        }
    }

    // function for input after clicking button b8
    b8.onclick = function()
    {
        if(b8.value=='')
        {
            if(ch==0)
            {
                ch=1;
                b8.value='0';
                if(checkcondition()!=false)
                {
                    systemInput();
                }
            }
            else
            {
                ch=0;
                b8.value='x';
                if(checkcondition()!=false)
                {
                    systemInput();
                }
            }
        }
    }

    // function for input after clicking button b9
    b9.onclick = function()
    {
        if(b9.value=='')
        {
            if(ch==0)
            {
                ch=1;
                b9.value='0';
                if(checkcondition()!=false)
                {
                    systemInput();
                }
            }
            else
            {
                ch=0;
                b9.value='x';
                if(checkcondition()!=false)
                {
                    systemInput();
                }
            }
        }
    }

    //function for reset button

    reset.onclick =function()
    {
        ch=0;
        b1.value='';
        b2.value='';
        b3.value='';
        b4.value='';
        b5.value='';
        b6.value='';
        b7.value='';
        b8.value='';
        b9.value='';

        b1.style.backgroundColor = "#0669c2";
        b2.style.backgroundColor = "#0669c2";
        b3.style.backgroundColor = "#0669c2";
        b4.style.backgroundColor = "#0669c2";
        b5.style.backgroundColor = "#0669c2";
        b6.style.backgroundColor = "#0669c2";
        b7.style.backgroundColor = "#0669c2";
        b8.style.backgroundColor = "#0669c2";
        b9.style.backgroundColor = "#0669c2";
        enable();
    }
});
