import  React, { useEffect, useState } from 'react'

const ComingSoon = () => {

const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
    });

    return (
        <div>
            <div class="simpleslide100">
                <div class="simpleslide100-item bg-img1" style={{ backgroundImage: " url('images/headimg.jpg')", backgroundSize: "cover" }}></div>
            </div>
            <div class="size1 overlay1">
                <div class="size1 flex-col-c-m p-l-15 p-r-15 p-t-50 p-b-50">
                    <h3 class="l1-txt1 txt-center p-b-25">
                        Coming Soon
			</h3>

                    <p class="m2-txt1 txt-center p-b-48">
                        Our website is under construction, follow us for update now!
			</p>

                    <div class="flex-w flex-c-m cd100 p-b-33">
                        <div class="flex-col-c-m size2 bor1 m-l-15 m-r-15 m-b-20">
    <span class="l2-txt1 p-b-9 days">{timeLeft.days}</span>
                            <span class="s2-txt1">Days</span>
                        </div>

                        <div class="flex-col-c-m size2 bor1 m-l-15 m-r-15 m-b-20">
                            <span class="l2-txt1 p-b-9 hours">{timeLeft.hours}</span>
                            <span class="s2-txt1">Hours</span>
                        </div>

                        <div class="flex-col-c-m size2 bor1 m-l-15 m-r-15 m-b-20">
                            <span class="l2-txt1 p-b-9 minutes">{timeLeft.minutes}</span>
                            <span class="s2-txt1">Minutes</span>
                        </div>

                        <div class="flex-col-c-m size2 bor1 m-l-15 m-r-15 m-b-20">
                            <span class="l2-txt1 p-b-9 seconds">{timeLeft.seconds}</span>
                            <span class="s2-txt1">Seconds</span>
                        </div>
                    </div>
                    {/* <form class="w-full flex-w flex-c-m validate-form">

                    <div class="wrap-input100 validate-input where1" data-validate="Valid email is required: ex@abc.xyz">
                        <input class="input100 placeholder0 s2-txt2" type="text" name="email" placeholder="Enter Email Address">
                            <span class="focus-input100"></span>
				</div>


                        <button class="flex-c-m size3 s2-txt3 how-btn1 trans-04 where1">
                            Subscribe
				</button>
			</form> */}
                </div>
            </div>
        </div>
    )
}

const calculateTimeLeft = () => {
    const difference = +new Date("2020-05-05") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        };
    }

    return timeLeft;
};

export default ComingSoon;
