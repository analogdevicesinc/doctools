<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAX9791A evaluation kit (EV kit) demonstrates the MAX9791A IC, which combines a stereo Class D power amplifier,  a  DirectDrive ® stereo headphone amplifier, and a 120mA, 4.75V low-dropout regulator (LDO) for notebook, tablet PC, and portable media player applications. Maxim's DirectDrive technology eliminates the need for bulky DC-blocking capacitors at the output of the headphone amplifier.

The EV kit is configured for a 12dB speaker amplifier gain and a 0dB headphone amplifier gain. It is designed to  operate from a 4.5V to 5.5V speaker supply and an optional separate 2.7V to 5.5V headphone supply. The EV kit is capable of delivering up to 2W into a pair of 4 Ω speakers and 180mW into a 32 Ω headphone load.

| DESIGNATION             | QTY                 | DESCRIPTION                                                               |
|-------------------------|---------------------|---------------------------------------------------------------------------|
| REQUIRED COMPONENTS     | REQUIRED COMPONENTS | REQUIRED COMPONENTS                                                       |
| C1, C2, C5, C6, C25-C28 | 8                   | 1µF ±10%, 10V X7R ceramic capacitors (0603) Murata GRM188R71A105K         |
| C3, C4, C29             | 3                   | 1µF ±10%, 50V X7R ceramic capacitors (0805) Murata GRM21BR71H105K         |
| C7, C8, C9              | 3                   | 0.1µF ±10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104K       |
| C10, C30, C31           | 3                   | 10µF ±10%, 10V X7R ceramic capacitors (0805) Murata GRM21BR71A106K        |
| R1, R2                  | 2                   | 20k ±1% resistors (0603)                                                  |
| R3, R4, R13             | 3                   | 40.2k ±1% resistors (0603)                                                |
| U1                      | 1                   | Speaker and headphone amplifier with LDO (28 TQFN-EP*) Maxim MAX9791AETI+ |
| -                       | 1                   | PCB: MAX9791A Evaluation Kit+                                             |

DirectDrive is a registered trademark of Maxim Integrated Products, Inc.

## Features

- ♦ No DC-Blocking Output Capacitors Required at Headphone Output
- ♦ Speaker and Headphone Operation Speaker: 2W Stereo Output Headphone: 180mW DirectDrive Stereo Output
- ♦ Wake-on-Beep Function
- ♦ 120mA, 4.75V LDO
- ♦ Lead-Free and RoHS Compliant
- ♦ Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX9791AEVKIT+ | EV Kit |

## Component List

*EP = Exposed pad.

| DESIGNATION                                           | QTY                 | DESCRIPTION                                    |
|-------------------------------------------------------|---------------------|------------------------------------------------|
| OPTIONAL COMPONENTS                                   | OPTIONAL COMPONENTS | OPTIONAL COMPONENTS                            |
| AVDD, HPVDD, PGND, SPOUTL+, SPOUTL-, SPOUTR+, SPOUTR- | 7                   | Binding posts                                  |
| C11-C24, C32, C33                                     | 0                   | Not installed, ceramic capacitors (0603)       |
| HPL, HPR, PGND, SENSE, SPOL+, SPOL-, SPOR+, SPOR-     | 0                   | Not installed, small PCB test points           |
| HPINL, SPINL                                          | 2                   | White side-entry phono jacks                   |
| HPINR, SPINR                                          | 2                   | Red side-entry phono jacks                     |
| HPOUT                                                 | 1                   | 3.5mm stereo headphone jack                    |
| JU1, JU2, JU3                                         | 3                   | 3-pin headers                                  |
| JU4, JU6                                              | 2                   | 2-pin headers                                  |
| JU5                                                   | 0                   | Not installed, 2-pin header                    |
| L1-L4                                                 | 0                   | Not installed, inductors (6.4mm x 6mm x 1.5mm) |
| R5-R8                                                 | 4                   | 0 ±5% resistors (0805)                         |
| R9-R12, R14, R15                                      | 0                   | Not installed, resistors (0603)                |
| R16                                                   | 0                   | Not installed, resistor (0805)                 |
| -                                                     | 5                   | Shunts (JU1-JU5)                               |

## MAX9791A Evaluation Kit

## Procedure

The MAX9791A EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Verify that shunts are installed as follows:
2. JU1:  Pins 2-3 (speaker amplifier enabled)
3. JU2:  Pins 1-2 (headphone amplifier enabled)
4. JU3:  Pins 1-2 (LDO enabled)
5. JU4:  Installed (HPVDD connected to AVDD)
6. JU6:  Installed (wake-on-beep function disabled)
- 2) Set the power-supply output to 5V.
- 3) Disable the power-supply output.
- 4) Connect the power-supply ground to the PGND PCB pad and the power-supply positive output to the AVDD PCB pad.
- 5) Verify that the audio source output is disabled.
- 6) Connect the audio sources' right channels to the SPINR and HPINR phono jacks and the left channels to the SPINL and HPINL phono jacks.
- 7) Plug the headphone into the HPOUT headphone jack.
- 8) Connect one speaker across the SPOUTL+ and SPOUTL- PCB pads and the other speaker across the SPOUTR+ and SPOUTR- PCB pads.
- 9) Enable the power-supply output.
- 10) Enable the audio source.
- 11) Verify that the headphones and speakers are playing the audio source signal.

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |

Note: Indicate that you are using the MAX9791A when contacting this component supplier.

## Quick Start

## Recommended Equipment

Before beginning, the following equipment is needed:

- One 5V, 3A DC supply
- Two 4 Ω speakers
- One stereo headphone
- Two audio signal sources

## Detailed Description of Hardware

The MAX9791A evaluation kit (EV kit) demonstrates the MAX9791A IC in a 28-pin TQFN package. The IC combines a stereo Class D amplifier, a stereo DirectDrive headphone amplifier, and a 120mA, 4.75V low-dropout regulator (LDO) for notebook, tablet PC, and portable media player applications. Maxim's DirectDrive technology eliminates the need for bulky DC-blocking capacitors at the headphone amplifier output. The IC features adjustable gain.

The EV kit is configured for a 12dB speaker amplifier gain and 0dB headphone amplifier gain. The gains can be adjusted by modifying the corresponding gain-setting resistors R1-R4. R1 and R2 set the speaker amplifier  gain  while  R3  and R4 set the headphone amplifier gain. The EV kit is designed to operate from a 4.5V to 5.5V speaker supply and an optional separate 2.7V to 5.5V headphone supply. The EV kit is capable of delivering up to 2W into a pair of 4 Ω speakers, 180mW into a 32 Ω headphone load, and 120mA from the LDO output.

In  applications where speaker leads exceed 225mm, replace resistors R5-R8 with a surface-mount 0805 ferrite  bead and install surface-mount 0603 capacitors for C11-C14. The speaker outputs do not require an output filter as the MAX9791A relies on the inherent inductance of the speaker coil and the natural filtering of an attached speaker. For optimum results, use a speaker with a series inductance &gt; 10µH. The EV kit layout shows an optional speaker output filter for evaluation purposes.

## Shutdown

Jumpers JU1, JU2, and JU3 enable or disable the speaker amplifier ( SPKR\_EN ), the headphone amplifier (HP\_EN), and the LDO (LDO\_EN), respectively. See Tables 1, 2, and 3 for jumper JU1, JU2, and JU3 configuration.

## Table 1. Speaker Amplifier (Jumper JU1)

| SHUNT POSITION   | SPKR_EN PIN       | MAX9791A SPEAKER AMPLIFIER   |
|------------------|-------------------|------------------------------|
| 1-2              | Connected to AVDD | Disabled                     |
| 2-3*             | Connected to PGND | Enabled                      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9791A Evaluation Kit

Table 2. Headphone Amplifier (Jumper JU2)

## Speaker and Headphone Gain Setting

| SHUNT POSITION   | HP_EN PIN         | MAX9791A HEADPHONE AMPLIFIER   |
|------------------|-------------------|--------------------------------|
| 1-2*             | Connected to AVDD | Enabled                        |
| 2-3              | Connected to PGND | Disabled                       |

*Default position.

Table 3. LDO (Jumper JU3)

| SHUNT POSITION   | LDO_EN PIN        | MAX9791A LDO   |
|------------------|-------------------|----------------|
| 1-2*             | Connected to AVDD | Enabled        |
| 2-3              | Connected to PGND | Disabled       |

The default gain-setting resistors (R1 and R2) configure the speaker amplifier gain to 12dB. While the default gain-setting resistors (R3 and R4) configure the headphone amplifier gain to 0dB. The gain can be changed by replacing these resistors with other surface-mount 0603 resistors. Resistors with a tolerance of 1% are recommended for optimum performance. Use Table 5 and the following equations to select new gain-setting resistors for the corresponding channel:

## Table 5. Component Function

| CHANNEL         | RIN   |
|-----------------|-------|
| Speaker right   | R1    |
| Speaker left    | R2    |
| Headphone right | R3    |
| Headphone left  | R4    |

<!-- formula-not-decoded -->

where AVSPKR is the desired speaker voltage gain.

<!-- formula-not-decoded -->

where AVHP is the desired headphone voltage gain.

## Wake-on-Beep

Jumper JU6 controls the MAX9791A EV kit's wake-onbeep feature. See Table 4 for jumper JU6 configuration. Refer to the Wake-on-Beep section of the MAX9791/ MAX9792 IC data sheet for more information.

Table 4. Wake-on-Beep (Jumper JU6)

| SHUNT POSITION   | BEEP PIN*                                | EV KIT FUNCTION                                                                                                                             |
|------------------|------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| Installed**      | Connected to GND                         | Wake-on-beep feature is disabled                                                                                                            |
| Not installed    | Connected to a user-supplied BEEP output | A qualified BEEP signal † overrides HP_EN and SPKR_EN enabling the speaker and headphone amplifiers. The LDO must be enabled (see Table 3). |

*Do not leave the BEEP pin unconnected.

**Default position.

† Refer to MAX9791/MAX9792 IC data sheet.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9791A Evaluation Kit

<!-- image -->

Figure 1. MAX9791A EV Kit Schematic

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9791A Evaluation Kit

<!-- image -->

Figure 2. MAX9791A EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9791A Evaluation Kit

Figure 3. MAX9791A EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9791A Evaluation Kit

<!-- image -->

Figure 4. MAX9791A EV Kit PCB Layout-Layer 2

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9791A Evaluation Kit

Figure 5. MAX9791A EV Kit PCB Layout-Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9791A Evaluation Kit

Figure 6. MAX9791A EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9791A Evaluation Kit

Figure 7. MAX9791A EV Kit Component Placement Guide-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

10

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_