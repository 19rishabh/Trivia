 //Use document.querySelectorAll to query for multiple HTML elements that match a query. The function returns an array of all matching elements.
            // write ids like xyz-abc-lmn
            // .length function


            document.addEventListener('DOMContentLoaded', function()
            {
                let correct = document.querySelectorAll(".C");
                for(let i = 0; i< correct.length; i++)
                {
                    correct[i].addEventListener('click', function()
                    {
                        this.style.backgroundColor = '#90EE90';
                    });
                }


                let incorrects = document.querySelectorAll(".W");
                for(let i = 0; i< incorrects.length; i++)
                {
                    incorrects[i].addEventListener('click', function()
                    {
                        this.style.backgroundColor = 'red';
                    });
                }

                //use .value for input tags
                //each has to be done separate - document.getElementById("answer").value == "valmiki" || document.getElementById("answer").value == "Valmiki"
                //see the regex

                document.getElementById("submit1").addEventListener('click', function()
                {
                    if(/valmiki/i.test(document.getElementById("answer1").value))
                    {
                        document.getElementById("answer1").style.backgroundColor = '#90EE90';
                        document.getElementById("result1").innerHTML = "Correct!";
                    }
                    else
                    {
                        document.getElementById("answer1").style.backgroundColor = 'red';
                        document.getElementById("result1").innerHTML = "Incorrect";
                    }
                });

                document.getElementById("submit2").addEventListener('click', function()
                {
                    if(/agni/i.test(document.getElementById("answer2").value))
                    {
                        document.getElementById("answer2").style.backgroundColor = '#90EE90';
                        document.getElementById("result2").innerHTML = "Correct!";
                    }
                    else
                    {
                        document.getElementById("answer2").style.backgroundColor = 'red';
                        document.getElementById("result2").innerHTML = "Incorrect";
                    }
                });

                document.getElementById("submit3").addEventListener('click', function()
                {
                    if(/kailash/i.test(document.getElementById("answer3").value))
                    {
                        document.getElementById("answer3").style.backgroundColor = '#90EE90';
                        document.getElementById("result3").innerHTML = "Correct!";
                    }
                    else
                    {
                        document.getElementById("answer3").style.backgroundColor = 'red';
                        document.getElementById("result3").innerHTML = "Incorrect";
                    }
                });

            });
