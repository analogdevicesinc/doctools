<!-- lastmod 2022-08-05 -->
## General Description

The MAX4411 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that evaluates the MAX4411 fixed gain, DirectDrive™ stereo headphone amplifier. The DirectDrive architecture of the MAX4411 eliminates the two large DC-blocking capacitors typically required between the output of the amplifier  and the headphones. Additionally, the gain of the amplifier is set internally, (-1.5V/V, MAX4411 and -2V/V, MAX4411B) further reducing component count.

<!-- image -->

## Features

- ♦ No Bulky DC-Blocking Capacitors Required
- ♦ Fixed Gain Eliminates External Feedback Network
- ♦ 1.8V to 3.6V Single-Supply Operation
- ♦ 80mW Per Channel into 16 Ω
- ♦ Low 0.003% THD+N at 1kHz
- ♦ Independent Left/Right, Low-Power Shutdown Controls
- ♦ Ultra-Compact Solution
- ♦ Fully Assembled and Tested Surface-Mount Board

MAX4411: -1.5V/V

MAX4411B: -2V/V

## Ordering Information

| PART         | TEMP RANGE       | IC PACKAGE   |
|--------------|------------------|--------------|
| MAX4411EVKIT | 0 ° C to +70 ° C | 20 Thin QFN  |

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          | WEBSITE               |
|-------------|--------------|--------------|-----------------------|
| AVX         | 843-946-0238 | 843-626-3123 | www.avxcorp.com       |
| Taiyo Yuden | 800-348-2496 | 847-925-0899 | www.t-yuden.com       |
| TDK         | 847-803-6100 | 847-390-4405 | www.component.tdk.com |

Note: Indicate that you are using the MAX4411 when contacting these component suppliers.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                  |
|---------------|-------|----------------------------------------------------------------------------------------------|
| C1, C2, C3    |     3 | 2.2µF ± 10%, 6.3V X5R ceramic capacitors (0603) TDK C1608X5R0J225K Taiyo Yuden JMK107BJ225KA |
| C4            |     1 | 10µF ± 20%, 6.3V X5R ceramic capacitor (0805) TDK C2012X5R0J106M Taiyo Yuden JMK212BJ106MG   |
| C5            |     1 | 0.1µF ± 10%, 16V X7R ceramic capacitor (0603) TDK C1608X7R1C104K Taiyo Yuden EMK107BJ104KA   |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                    |
|---------------|-------|----------------------------------------------------------------|
| C6, C7        |     2 | 1.0µF ± 10%, 16V tantalum capacitors (A-case) AVX TAJA105K016R |
| J1            |     1 | Stereo headphone jack (3.5mm dia.)                             |
| JU1, JU2      |     2 | 3-pin headers                                                  |
| None          |     2 | Shunts                                                         |
| R1, R2        |     2 | 10k Ω ± 1% resistors (0603)                                    |
| U1            |     1 | MAX4411ETP (20-pin TQFN, 4mm x 4mm x 0.8mm)                    |
| None          |     1 | MAX4411 EV kit PC board                                        |
| None          |     1 | MAX4411 EV kit data sheet                                      |
| None          |     1 | MAX4411 data sheet                                             |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

## MAX4411 Evaluation Kit

## Quick Start

## Recommended Equipment

- One pair of 16 Ω or 32 Ω headphones
- One variable DC power supply capable of supplying between 1.8V and 3.6V at 300mA
- One stereo audio source

## Procedure

The MAX4411 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Do not turn on the power supply until all connections are completed:

- 1) Verify that shunts are installed across pins 1 and 2 of jumpers JU1 and JU2.
- 1) Plug the headphones into the 3.5mm headphone jack.
- 3) Ensure that the stereo audio source is turned off.
- 4) Connect the disabled audio source between IN\_ and GND.
- 5) Connect the 1.8V to 3.6V DC power supply to the VDD and GND pads.
- 6) Turn on the DC power supply.
- 7) Enable the stereo audio source.

## Detailed Description

The MAX4411 is a fixed-gain, stereo headphone amplifier  featuring  Maxim's DirectDrive architecture. The device consists of two 80mW Class AB headphone amplifiers,  an  internal  feedback  network,  undervoltage lockout (UVLO)/shutdown control, a charge pump, and comprehensive click-and-pop suppression circuitry.

The MAX4411 EV kit has an internal gain of -1.5V/V and can be powered with a 1.8V to 3.6V single supply. The MAX4411  EV  kit  can  be  used  to  evaluate  the MAX4411B. The MAX4411B has an internal -2V/V gain. To evaluate the MAX4411B, request a MAX4411BETP free sample with the MAX4411 EV kit.

## Shutdown Control

The MAX4411 EV kit provides two shutdown pins ( SHDNL and SHDNR )  to  disable  the  outputs,  allowing each channel to be shut down independently. Jumpers JU1 and JU2 control the left and right channels, respectively (see Table 1 for shutdown shunt positions).

Shorting pin 2 of JU1 to pin 2 of JU2 allows the user to control both channels' shutdown pins simultaneously by driving the provided user pad SHDN with  an  external source (see Figure 1 for shunt configuration). SHDNL and SHDNR are CMOS logic-level inputs.

## Layout Considerations

To optimize the audio performance of the MAX4411, it is  important to follow these layout guidelines. The MAX4411 EV kit uses two ground planes to minimize switching noise from the charge-pump coupling into the audio signal. The two planes are star-connected at one point (GND pad). Capacitors C1, C2, and C3 should be placed close to the IC. Short, wide traces should be used to connect the power pins of the IC to the power supply.

Note: Capacitors C1 and C2 can be reduced in size. See Figure 3 and the MAX4411 data sheet for details.

## Table 1. Shutdown Selection

Figure 1. Simultaneous Shutdown Control

| JUMPER   | SHUNT POSITION   | DESCRIPTION            |
|----------|------------------|------------------------|
| JU1      | 1-2              | Left channel enabled   |
| JU1      | 2-3              | Left channel disabled  |
| JU2      | 1-2              | Right channel enabled  |
| JU2      | 2-3              | Right channel disabled |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX4411 Evaluation Kit

<!-- image -->

Figure 2. MAX4411 EV Kit Schematic

Figure 3. Output Power vs. C1 and C2

<!-- image -->

<!-- image -->

Figure 4. MAX4411 EV Kit Component Placement GuideComponent Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4410 Evaluation Kit

<!-- image -->

Figure 5. MAX4411 EV Kit PC Board Layout-Component Side

Figure 6. MAX4411 EV Kit Component Placement GuideSolder Side

<!-- image -->

Figure 7. MAX4411 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600