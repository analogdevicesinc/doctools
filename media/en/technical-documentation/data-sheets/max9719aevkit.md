<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAX9719A evaluation kit (EV kit) is a fully assembled and tested circuit board that uses the MAX9719A stereo, differential  audio amplifier to drive a pair of bridge-tiedload (BTL) speakers in portable audio applications. Designed to operate from a 2.7V to 5.5V DC power supply, the EV kit is capable of delivering 2 x 1.1W into a pair of 8 Ω speakers.

The MAX9719A inputs can accept a common-mode input voltage of 0.5V through (VCC - 1.2V) from a DC-coupled source, therefore eliminating the need for input-signal coupling capacitors. The EV kit provides an option to bypass the input-signal coupling capacitors when the DC offset level of the input signals is within an acceptable range.  The  MAX9719A  EV  kit  also  evaluates  the MAX9719B, MAX9719C, and MAX9719D.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                         |
|---------------|-------|---------------------------------------------------------------------|
| A1            |     0 | MAX9719AEBE (16-pin UCSP)                                           |
| C1-C4         |     4 | 0.47µF ±20%, 16V film chip capacitors (1206) Panasonic ECPU1C474MA5 |
| C5            |     1 | 10µF ±20%, 6.3V X5R ceramic capacitor (0805) TDK C2012X5R0J106M     |
| C6, C7        |     2 | 1µF ±10%, 10V X5R ceramic capacitors (0603) TDK C1608X5R1A105K      |
| C8            |     1 | 0.1µF ±10%, 25V X7R ceramic capacitor (0603) TDK C1608X7R1E104K     |
| C9-C12        |     0 | Not installed, capacitors (0603)                                    |
| R1-R8         |     8 | 10k Ω ±1% resistors (0603)                                          |
| U1            |     1 | MAX9719AETE (16-pin TQFN)                                           |
| JU1-JU4       |     4 | 2-pin headers                                                       |
| JU5           |     1 | 3-pin header                                                        |
| None          |     5 | Shunts                                                              |
| None          |     1 | MAX9719A PC board                                                   |

## Features

- ♦ Also Evaluates the MAX9719B/C/D (IC and Component Replacement Required)
- ♦ 2.7V to 5.5V Single-Supply Operation
- ♦ Drives 2 x 1.1W Into Stereo 8 Ω Speakers at 1% THD+N
- ♦ Differential Inputs
- ♦ 100nA Shutdown Current (typ)
- ♦ Small 16-Pin TQFN (4mm x 4mm) Package
- ♦ Also Available in 16-Bump UCSP and 16-Pin TSSOP-EP Packages
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TEMP RANGE   | IC PACKAGE              |
|---------------|--------------|-------------------------|
| MAX9719AEVKIT | 0°C to +70°C | 16-TQFN-EP* (4mm x 4mm) |

* EP = Exposed paddle.

## Quick Start

The MAX9719A EV kit is fully assembled and tested. Follow the steps listed below to verify board operation. Do not turn on the power supply until all connections are completed.

## Recommended Equipment

- 2.7V to 5.5V, 3A power supply
- Audio signal source with stereo outputs
- Two 8 Ω speakers
- 1) Verify that no shunts are installed on jumpers JU1-JU4 (input-signal coupling capacitors are in circuit).
- 2) Verify that a shunt is installed across pins 1 and 2 of jumper JU5 (EV kit ON).
- 3) Connect the first 8 Ω speaker across the OUTR+ and OUTR- PC board pads.
- 4) Connect the second 8 Ω speaker across the OUTL+ and OUTL- PC board pads.

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          | WEBSITE               |
|------------|--------------|--------------|-----------------------|
| Panasonic  | 714-373-7366 | 714-737-7323 | www.panasonic.com     |
| TDK        | 847-803-6100 | 847-390-4405 | www.component.tdk.com |

Note: Indicate that you are using the MAX9719AEVKIT when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9719A Evaluation Kit

- 5) Connect the positive terminal of the power supply to the VCC pad and the power-supply ground terminal to the GND pad.
- 6) Connect the first output of the stereo audio source across the INPUTR+ and INPUTR- pads.
- 7) Connect the second output of the stereo audio source across the INPUTL+ and INPUTL- pads.
- 8) Turn on the power supply.
- 9) Turn on the audio source.

## Detailed Description

The MAX9719A EV kit features the MAX9719A stereo differential  audio  amplifier,  designed to drive a pair of 8 Ω speakers in portable audio applications. The EV kit operates from a DC power supply that can provide 2.7V to 5.5V and 3A of current.

As configured, the EV kit is set for a gain of 1V/V (0dB) by gain-setting resistors R1-R8. To set the EV kit to a different gain, select other gain-setting resistors. Refer to the Applications Information section in the MAX9718/ MAX9719 data sheet  for  selecting  the  resistors. Capacitors C9-C12 are used for optionally limiting the audio signal bandwidth.

## Jumper Selection

## Shutdown Mode ( SHDN )

The MAX9719A features a shutdown mode that reduces the MAX9719A quiescent current to 100nA (typ). Jumper JU5 controls the shutdown pin ( SHDN ) of the MAX9719A IC. See Table 1 for shunt positions.

## Table 1. JU5 Jumper Selection

| SHUNT POSITION                              | EV KIT FUNCTION                                        |
|---------------------------------------------|--------------------------------------------------------|
| 1-2 ( SHDN = high)                          | EV kit enabled                                         |
| 2-3 ( SHDN = low)                           | Shutdown mode                                          |
| None. External logic connected to SHDN pad. | SHDN driven by external logic. Shutdown is active low. |

## Bypassing the Input-Signal Coupling Capacitors (C1-C4)

Jumpers JU1-JU4 provide an option to bypass the input-signal coupling capacitors C1-C4, respectively, on the MAX9719A EV kit. See Table 2 for the various shunt positions. Refer to the Input Filter section of the MAX9718/MAX9719 data sheet

## Table 2. JU1-JU4 Jumper Selection

| SHUNT POSITION          | INPUT-SIGNAL COUPLING CAPACITORS   |
|-------------------------|------------------------------------|
| Not Installed (default) | In circuit                         |
| Installed               | DC-coupled inputs                  |

## Evaluating MAX9719B/MAX9719C/MAX9719D

The MAX9719A EV kit can evaluate the MAX9719B, MAX9719C, and MAX9719D. To evaluate a different IC, replace U1 with the desired part, and replace the components as outlined in Table 3. Refer to the MAX9718/ MAX9719 data sheet for additional information.

## Table 3. Component Values for Evaluating Different Versions of the MAX9719

| COMPONENT      | EVALUATING THE MAX9719A   | EVALUATING THE MAX9719B   | EVALUATING THE MAX9719C   | EVALUATING THE MAX9719D   |
|----------------|---------------------------|---------------------------|---------------------------|---------------------------|
| U1             | MAX9719A                  | MAX9719B                  | MAX9719C                  | MAX9719D                  |
| R1, R3, R5, R7 | 10k Ω                     | 0 Ω                       | 0 Ω                       | 0 Ω                       |
| R2, R4, R6, R8 | 10k Ω                     | OPEN                      | OPEN                      | OPEN                      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9719A Evaluation Kit

<!-- image -->

Figure 1. MAX9719A EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9719A Evaluation Kit

<!-- image -->

Figure 2. MAX9719A EV Kit Component Placement GuideComponent Side

Figure 3. MAX9719A EV Kit PC Board Layout-Component Side

<!-- image -->

Figure Figure 4. MAX9719A EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600