<!-- lastmod 2022-08-05 -->
<!-- image -->

## General Description

The MAX9789A evaluation kit (EV kit) is a fully assembled and tested circuit board that evaluates the MAX9789A IC. The MAX9789A combines a stereo 2W Class AB speaker power amplifier, a stereo 85mW DirectDrive™ headphone amplifier, and a 120mA lowdropout (LDO) linear regulator in a single device. The MAX9789A is designed for use with the Windows Vista™ operating system and is fully compliant with Microsoft's premium mobile Vista specifications.

The speaker amplifier operates from a 4.5V to 5.5V DC power supply and delivers 2 x 2W output power into a pair of 4 Ω speakers. The headphone amplifier operates from a 3.0V to 5.5V DC power supply and delivers 100mW output power into a 16 Ω stereo headphone.

The MAX9789A provides separate stereo speaker and headphone amplifier inputs. Control pins provide independent shutdown of the speaker and headphone amplifiers, allowing speaker and headphone amplifiers to reproduce separate audio streams simultaneously.

The MAX9789A features an internal 120mA LDO. The LDO output voltage is internally set at 4.75V, or can be externally  adjusted between 1.21V and 4.75V using a simple resistor-divider. The LDO can be enabled independently of the audio amplifiers.

The MAX9789A EV kit can be used to evaluate the MAX9790A. See the Evaluating the MAX9790A section for more details.

Windows Vista is a trademark of Microsoft Corp.

| DESIGNATION             | QTY                 | DESCRIPTION                                                       |
|-------------------------|---------------------|-------------------------------------------------------------------|
| REQUIRED COMPONENTS     | REQUIRED COMPONENTS | REQUIRED COMPONENTS                                               |
| C1, C2, C3, C9, C11-C14 | 8                   | 1.0µF ±10%, 6.3V X5R ceramic capacitors (0402) TDK C1005X5R0J105K |
| C4                      | 1                   | 10µF ±20%, 6.3V X5R ceramic capacitor (0805) TDK C2012X5R0J106M   |
| C5, C6                  | 2                   | 1.0µF ±10%, 10V X7R ceramic capacitors (0603) TDK C1608X7R1A105K  |
| C7, C8                  | 2                   | 1.0µF ±10%, 25V X7R ceramic capacitors (1206) TDK C3216X7R1E105K  |
| C10, C15, C17           | 3                   | 0.1µF ±10%, 10V X5R ceramic capacitors (0402) TDK C1005X5R1A104K  |
| C16*, C18*              | 2                   | 33µF ±20%, 6.3V X5R ceramic capacitors (1206) TDK C3216X5R0J336M  |

## Features

- ♦ Windows Premium Mobile Vista Compliant
- ♦ 2W Stereo Class AB BTL Speaker Amplifier
- ♦ Stereo 100mW DirectDrive Headphone Amplifier
- ♦ Integrated 120mA Low-Dropout Linear Regulator
- ♦ Fully Assembled and Tested
- ♦ Evaluates the MAX9790A (Replacement IC Required)

## Ordering Information

| PART           | TEMP RANGE    | IC PACKAGE   |
|----------------|---------------|--------------|
| MAX9789AEVKIT+ | 0°C to +70°C* | 32 TQFN-EP** |

## Component List

| DESIGNATION         | QTY                 | DESCRIPTION                                   |
|---------------------|---------------------|-----------------------------------------------|
| U1                  | 1                   | MAX9789AETJ+ (32-pin TQFN, 5mm x 5mm x 0.8mm) |
| -                   | 1                   | MAX9789A EV kit PCB                           |
| OPTIONAL COMPONENTS | OPTIONAL COMPONENTS | OPTIONAL COMPONENTS                           |
| C19                 | 1                   | Not installed, ceramic capacitor (0402)       |
| J1-J4, J6, J7, J8   | 7                   | 3-pin headers                                 |
| J5                  | 1                   | 2-pin header                                  |
| J9                  | 1                   | 3.5mm stereo jack                             |
| R1                  | 1                   | 47k Ω ±1% resistor (0402)                     |
| R2                  | 1                   | 27k Ω ±1% resistor (0402)                     |
| -                   | 8                   | Shunts                                        |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

## MAX9789A Evaluation Kit

## Quick Start

## Recommended Equipment

- One 5V, 2A power supply
- Two audio sources
- Stereo speakers
- One stereo headphone

The MAX9789A EV kit is fully assembled and tested. Follow the steps listed below to verify board operation. Do not turn on the power supply until all connec-

## tions are completed.

- 1) Verify that a shunt is installed across pins 1 and 2 of jumper J1 (LDO\_EN = VDD, LDO enabled).
- 2) Verify that a shunt is installed across pins 2 and 3 of jumper J2 (LDO\_SET = GND, LDO\_OUT = 4.75V).
- 3) Verify that shunts are installed across pins 1 and 2 of jumper J3 and pins 2 and 3 of jumper J4 (GAIN2 = VDD, GAIN1 = GND, SPKR gain = 10dB).
- 4) Verify that a shunt is installed across jumper J5 (HPVDD = VDD).
- 5) Verify that a shunt is installed across pins 1 and 2 of jumper J6 ( MUTE = VDD, MUTE disabled).
- 6) Verify that a shunt is installed across pins 2 and 3 of jumper J7 ( SPKR\_EN = GND, SPKR enabled).
- 7) Verify that a shunt is installed across pins 1 and 2 of jumper J8 (HP\_EN = VDD, enabled).
- 8) Connect the first speaker to the OUTL+ and the OUTL- pads.
- 9) Connect the second speaker to the OUTR+ and the OUTR- pads.
- 10) Insert a pair of headphones to jack J9.
- 11) Connect the ground terminal of the power supply to the GND pad. Connect the +5V power supply to the VDD pad.
- 12) Connect the first audio source to the SPKR\_INL and the SPKR\_INR pads. Connect the audio source ground to the SGND pad.
- 13) Connect the second audio source to the HP\_INL and the HP\_INR pads. Connect the audio source ground to the SGND pad.
- 14) Turn on the power supply and both audio sources.

## Detailed Description

The MAX9789A EV kit is designed to evaluate the MAX9789A IC. The MAX9789A combines a stereo 2W Class AB speaker power amplifier, a stereo 100mW DirectDrive headphone amplifier, and a 120mA lowdropout linear regulator in a single device. The MAX9789A is designed for use with the Windows Vista operating system and is fully compliant with Microsoft's premium mobile Vista specifications.

The speaker amplifier operates from a 4.5V to 5.5V DC power supply and delivers 2 x 2W output power into a pair  of  4 Ω speakers from an independent input port. The headphone amplifier operates from a 3.0V to 5.5V DC power supply and delivers 100mW power into 16 Ω stereo headphones from an independent input port. The EV kit can be powered by a single 4.5V to 5.5V DC power supply if desired.

The MAX9789A provides separate stereo speaker and headphone amplifier inputs. Control pins provide independent shutdown of the speaker and headphone amplifiers, allowing speaker and headphone amplifiers to reproduce separate audio streams simultaneously.

The speaker amplifier gain of the MAX9789A is selectable by jumpers J3 and J4. The MAX9789A also features a 120mA, fixed 4.75V or adjustable 1.21V to 4.75V, low-dropout linear regulator.

The EV kit is shipped with the MAX9789AETJ+ installed. The EV kit can also evaluate the MAX9790A. To evaluate the MAX9790A, see the Evaluating the MAX9790A section for additional information.

## Component Supplier

| SUPPLIER   | PHONE        | FAX          | WEBSITE               |
|------------|--------------|--------------|-----------------------|
| TDK        | 847-803-6100 | 847-390-4405 | www.component.tdk.com |

Note:

Indicate that you are using the MAX9789A/MAX9790A when contacting this component supplier.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9789A Evaluation Kit

## Jumper Selection

## Shutdown Control (J1, J7, and J8)

Jumpers J7 and J8 control the independent shutdown pins ( SPKR\_EN and HP\_EN, respectively) of the speaker  and headphone amplifiers. See Table 1 for shunt positions.

Table 1. J7 and J8 Jumper Selection

| J7 SHUNT POSITION   | J8 SHUNT POSITION   | EV KIT FUNCTION   | EV KIT FUNCTION   |
|---------------------|---------------------|-------------------|-------------------|
|                     |                     | SPKR              | HP                |
| 1-2                 | 2-3                 | Disabled          | Disabled          |
| 1-2                 | 1-2                 | Disabled          | Enabled           |
| 2-3                 | 2-3                 | Enabled           | Disabled          |
| 2-3*                | 1-2*                | Enabled           | Enabled           |

Jumper J1 enables/disables the linear regulator. See Table 2 for shunt positions.

Table 2. J1 Jumper Selection

| J1 SHUNT POSITION   | EV KIT FUNCTION   |
|---------------------|-------------------|
| 1-2*                | LDO enabled       |
| 2-3                 | LDO disabled      |

* Default setting.

## Gain Control (J3 and J4)

Jumpers J3 and J4 set the speaker amplifier gain on the EV kit. See Table 4 for shunt positions.

## Table 4. J3 and J4 Jumper Selection

| J3 SHUNT POSITION   | J4 SHUNT POSITION   |   SPEAKER AMPLIFIER GAIN (dB) |   HEADPHONE AMPLIFIER GAIN** (dB) |
|---------------------|---------------------|-------------------------------|-----------------------------------|
| 2-3                 | 2-3                 |                             6 |                               3.5 |
| 2-3*                | 1-2*                |                            10 |                               3.5 |
| 1-2                 | 2-3                 |                          15.6 |                               3.5 |
| 1-2                 | 1-2                 |                          21.6 |                               3.5 |

## Power-Supply Control (J5)

Jumper J5 connects VDD to HPVDD. See Table 5 for shunt positions.

## Table 5. J5 Jumper Selection

| J5 SHUNT POSITION   | EV KIT FUNCTION                                                           |
|---------------------|---------------------------------------------------------------------------|
| Installed*          | VDD = HPVDD                                                               |
| Not installed       | Provide a separate, external 3.0V to 5.5V potential between HPVDD and GND |

* Default setting.

## Low-Dropout Linear Regulator (J1 and J2)

Jumper J1 enables/disables the linear regulator. See Table 6 for shunt positions.

Jumper J2 connects the regulator's feedback input (LDO\_SET) to either GND or the resistor-divider R1/R2.

Table 6. J1 Jumper Selection

| J1 SHUNT POSITION   | EV KIT FUNCTION   |
|---------------------|-------------------|
| 1-2*                | LDO enabled       |
| 2-3                 | LDO disabled      |

* Default setting.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Mute Control (J6)

Jumper J6 controls the mute pin ( MUTE )  of  the  speaker and headphone amplifiers. See Table 3 for shunt positions.

Table 3. J6 Jumper Selection

| J6 SHUNT POSITION   | EV KIT FUNCTION     |
|---------------------|---------------------|
| 1-2*                | SPKR and HP unmuted |
| 2-3                 | SPKR and HP muted   |

* Default setting.

<!-- image -->

## MAX9789A Evaluation Kit

## Table 7. J2 Jumper Selection

* Default setting.

| J2 SHUNT POSITION   | EV KIT FUNCTION                                                                                                                                              |
|---------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1-2                 | The regulator's feedback input (LDO_SET) is connected to resistor-divider R1/R2. Note: The resistors installed on the EV kit set the output voltage to 3.3V. |
| 2-3*                | The regulator's feedback input (LDO_SET) is connected to GND. The output voltage is 4.75V.                                                                   |

See Table 7 for shunt positions.

The resistors installed on the MAX9789A EV kit set the output voltage to 3.3V. To change this voltage, replace R1 and R2. Use the following equation to select resistor values:

<!-- formula-not-decoded -->

where VLDO\_SET = 1.21V.

To simplify resistor selection:

<!-- formula-not-decoded -->

To minimize the current consumption, select resistor values between 10k Ω and 1M Ω .

Capacitor C19 (see Figure 1) can be used to compensate the input capacitance at LDO\_SET, the stray capacitance, and the wiring capacitance. This capacitor creates a zero in the feedback loop to reduce overshoot. Select C19 in the 10pF range when R1 is greater than 100k Ω . Overcompensation can cause poor stability in the high output current range.

## Evaluating the MAX9790A

Figure 1. Adjustable Output Using External Feedback Resistors

<!-- image -->

The MAX9790A combines a stereo 2W Class AB speaker  power  amplifier  with  a  stereo  100mW DirectDrive headphone amplifier only. To evaluate the MAX9790A,  replace  the  MAX9789A  with  the MAX9790A. Ensure a shunt is installed across pins 2 and 3 of jumper J1 before operating the device. Do not install  a  shunt  at  jumper  J2.  Follow  the  MAX9789A quick start instructions with the exception of steps 1 and 2.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9789A Evaluation Kit

Figure 2. MAX9789A EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9789A Evaluation Kit

Figure 3. MAX9790A Evaluation Schematic

<!-- image -->

Note: When evaluating the MAX9790A, ensure a shunt is installed across pins 2 and 3 of jumper J1 before operating the device. Do not install a shunt at jumper J2.

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9789A Evaluation Kit

<!-- image -->

<!-- image -->

Figure 4. MAX9789A EV Kit Component Placement GuideSilkscreen

<!-- image -->

Figure 6. MAX9789A EV Kit PCB Layout-Layer 2

Figure 5. MAX9789A EV Kit PCB Layout-Component Side

<!-- image -->

Figure 7. MAX9789A EV Kit PCB Layout-Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9789A Evaluation Kit

Figure 8. MAX9789A EV Kit PCB Layout-Solder Side

<!-- image -->

## Revision History

Pages changed at Rev 1: 1, 7, 8

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

Boblet