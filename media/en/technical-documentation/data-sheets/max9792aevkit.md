<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAX9792A evaluation kit (EV kit) demonstrates the MAX9792A IC, which combines a mono Class D power amplifier,  a  DirectDrive ® stereo headphone amplifier, and a 120mA, 4.75V low-dropout regulator (LDO) for notebook, tablet PC, and portable media player applications. Maxim's DirectDrive technology eliminates the need for bulky DC-blocking capacitors at the output of the headphone amplifier.

The EV kit is configured for a 12dB speaker amplifier gain and a 0dB headphone amplifier gain. It is designed to operate from a 4.5V to 5.5V speaker supply  and  an  optional  separate  2.7V  to  5.5V  headphone supply. The EV kit is capable of delivering up to 3W into a 3 Ω speaker and 180mW into a 32 Ω headphone load.

| DESIGNATION         | QTY                 | DESCRIPTION                                                                |
|---------------------|---------------------|----------------------------------------------------------------------------|
| REQUIRED COMPONENTS | REQUIRED COMPONENTS | REQUIRED COMPONENTS                                                        |
| C1, C5, C6, C25-C28 | 7                   | 1µF ±10%, 10V X7R ceramic capacitors (0603) Murata GRM188R71A105K          |
| C3, C4, C29         | 3                   | 1µF ±10%, 50V X7R ceramic capacitors (0805) Murata GRM21BR71H105K          |
| C7, C8, C9          | 3                   | 0.1µF ±10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104K        |
| C10, C30, C31       | 3                   | 10µF ±10%, 10V X7R ceramic capacitors (0805) Murata GRM21BR71A106K         |
| R1                  | 1                   | 20k Ω ±1% resistor (0603)                                                  |
| R3, R4, R13         | 3                   | 40.2k Ω ±1% resistors (0603)                                               |
| U1                  | 1                   | Speaker and headphone amplifiers with LDO (28 TQFN-EP*) Maxim MAX9792AETI+ |
| -                   | 1                   | PCB: MAX9792A Evaluation Kit+                                              |

DirectDrive is a registered trademark of Maxim Integrated Products, Inc.

## Features

- ♦ No DC-Blocking Output Capacitors Required at Headphone Output
- ♦ Speaker and Headphone Operation Speaker: 3W Mono Class D Output Headphone: 180mW Stereo DirectDrive Output
- ♦ Wake-on-Beep Function
- ♦ 120mA, 4.75V LDO
- ♦ Lead(Pb)-Free and RoHS Compliant
- ♦ Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX9792AEVKIT+ | EV Kit |

## Component List

| DESIGNATION                       | QTY                 | DESCRIPTION                                    |
|-----------------------------------|---------------------|------------------------------------------------|
| OPTIONAL COMPONENTS               | OPTIONAL COMPONENTS | OPTIONAL COMPONENTS                            |
| AVDD, HPVDD, PGND, SPOUT+, SPOUT- | 5                   | Binding posts                                  |
| C13, C14, C19, C20, C23, C24, C33 | 0                   | Not installed, ceramic capacitors (0603)       |
| C16                               | 0                   | Not installed, ceramic capacitor (0805)        |
| HPINL                             | 1                   | White side-entry phono jack                    |
| HPINR, SPIN                       | 2                   | Red side-entry phono jacks                     |
| HPL, HPR, PGND, SENSE, SPO+, SPO- | 0                   | Not installed, small PCB test points           |
| HPOUT                             | 1                   | 3.5mm stereo headphone jack                    |
| JU1, JU2, JU3                     | 3                   | 3-pin headers                                  |
| JU4, JU5                          | 2                   | 2-pin headers                                  |
| L3, L4                            | 0                   | Not installed, inductors (6.4mm x 6mm x 1.5mm) |
| R7, R8                            | 2                   | 0 Ω ±5% resistors (0805)                       |
| R11, R12, R15                     | 0                   | Not installed, resistors (0603)                |
| -                                 | 5                   | Shunts (JU1-JU5)                               |

1

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX9792A Evaluation Kit

- One 5V, 3A DC Supply
- One 3 Ω speaker
- One stereo headphone
- Two audio signal sources: one mono and another stereo

## Procedure

The MAX9792A EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Verify that shunts are installed as follows:
2. JU1: Pins 2-3 (speaker amplifier enabled)
3. JU2: Pins 1-2 (headphone amplifier enabled)
4. JU3: Pins 1-2 (LDO enabled)
5. JU4: Installed (HPVDD connected to AVDD)
6. JU5: Installed (wake-on-beep function disabled)
- 2) Set the power-supply output to 5V.
- 3) Disable the power-supply output.
- 4) Connect the power-supply ground to the PGND binding post and the power-supply positive output to the AVDD binding post.
- 5) Verify that the audio source output is disabled.
- 6) Connect the stereo audio source's right channel to the  HPINR phono jack and the left channel to the HPINL phono jack.
- 7) Connect the mono audio source to the SPIN phono jack.
- 8) Plug the headphone into the HPOUT headphone jack.
- 9) Connect the speaker across the SPOUT+ and SPOUT- binding posts.
- 10) Enable the power-supply output.
- 11) Enable the audio sources.
- 12) Verify that the headphones and speakers are playing the audio source signals.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Component Supplier

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |

Note: Indicate that you are using the MAX9792A when contacting this component supplier.

## Quick Start

## Required Equipment

## Detailed Description of Hardware

The MAX9792A EV kit demonstrates the MAX9792A IC in  a  28-pin  TQFN  package with an exposed pad. The IC combines a mono Class D amplifier, a stereo DirectDrive headphone amplifier, and a 120mA, 4.75V LDO for notebook, tablet PC, and portable media player applications. The EV kit demonstrates Maxim's DirectDrive technology, which eliminates bulky DCblocking capacitors at the headphone amplifier output. The MAX9792A IC features adjustable gain.

The MAX9792A EV kit is configured for a 12dB speaker amplifier gain and 0dB headphone amplifier gain. The gains can be adjusted by modifying the corresponding gain-setting resistors (R1, R3, and R4). R1 sets the speaker amplifier gain while R3 and R4 set the headphone amplifier gain. The EV kit is designed to operate from a 4.5V to 5.5V speaker supply providing 3A. To use the LDO, AVDD must range from 4.9V to 5.5V. An optional separate 2.7V to 5.5V headphone supply can power the headphone amplifier. The EV kit is capable of delivering up to 3W into a 3 Ω speaker, 180mW into a 32 Ω headphone load, and 120mA from the 4.75V LDO output.

In  applications where the speaker leads exceed 225mm, replace resistors R7 and R8 with surfacemount 0805 ferrite beads and install surface-mount 0603 capacitors for C13 and C14. Refer to the Optional Ferrite Bead Filter section of the MAX9791/MAX9792 IC data sheet for more information. The speaker outputs do not require an output filter as the MAX9792A relies on the inherent inductance of the speaker coil and the natural filtering  of  an  attached  speaker.  For  optimum results, use a speaker with a series inductance &gt; 10µH. The EV kit layout shows an optional speaker output filter for evaluation purposes only.

<!-- image -->

## MAX9792A Evaluation Kit

## Speaker/Headphone Amplifier Shutdown

Jumpers JU1 and JU2 enable or disable the speaker amplifier  ( SPKR\_EN )  and  headphone  amplifier (HP\_EN), respectively. See Tables 1 and 2 for jumper JU1 and JU2 configuration to shut down or enable the respective amplifier.

Table 2. Headphone Amplifier (JU2)

## LDO Shutdown

Jumper JU3 enables or disables the LDO (LDO\_EN). To use the LDO, AVDD must range between 4.9V and 5.5V. See Table 3 for jumper JU3 configuration to shut down or enable the LDO.

## Optional Headphone Supply Configuration

Jumper JU4 configures the source for the headphone power supply (HPVDD). To power HPVDD using AVDD, install a shunt on jumper JU4. To use an optional separate supply for HPVDD, do not install a shunt on jumper JU4 and connect a 2.7V to 5.5V supply across the HPVDD and PGND binding posts. See Table 4 for jumper JU4 configuration.

## Wake-on-Beep

Jumper JU5 controls the MAX9792A EV kit's wake-onbeep feature. A qualified BEEP signal overrides HP\_EN and SPKR\_EN enabling the speaker and headphone amplifiers. Refer to the Wake-on-Beep section of the MAX9791/MAX9792 IC data sheet for more information. To use the wake-on-beep feature, remove the shunt from jumper JU5, connect a user-supplied BEEP signal across the BEEP and nearby PGND PCB pads. Note: Do not leave the BEEP pin unconnected. The LDO must be enabled to use the wake-on-beep feature. See Table 5 for jumper JU5 configuration.

## Table 1. Speaker Amplifier (JU1)

| SHUNT POSITION   | SPKR_EN PIN       | SPEAKER AMPLIFIER   |
|------------------|-------------------|---------------------|
| 1-2              | Connected to AVDD | Disabled            |
| 2-3*             | Connected to PGND | Enabled             |

<!-- image -->

| SHUNT POSITION   | HP_EN PIN         | HEADPHONE AMPLIFIER   |
|------------------|-------------------|-----------------------|
| 1-2*             | Connected to AVDD | Enabled               |
| 2-3              | Connected to PGND | Disabled              |

*Default position.

## Table 3. LDO (JU3)

| SHUNT POSITION   | LDO_EN PIN        | 4.75V LDO   |
|------------------|-------------------|-------------|
| 1-2*             | Connected to AVDD | Enabled     |
| 2-3              | Connected to PGND | Disabled    |

*Default position.

## Table 4. Headphone Supply (JU4)

| SHUNT POSITION   | HPVDD PIN                       | HPVDD POWER- SUPPLY SOURCE            |
|------------------|---------------------------------|---------------------------------------|
| Installed*       | Connected to AVDD               | AVDD supply                           |
| Not installed    | Connected to HPVDD binding post | Optional separate 2.7V to 5.5V supply |

*Default position.

## Table 5. Wake-on-Beep (JU5)

| SHUNT POSITION   | BEEP PIN                  | WAKE-ON-BEEP FEATURE                                                             |
|------------------|---------------------------|----------------------------------------------------------------------------------|
| Installed*       | Connected to PGND         | Disabled                                                                         |
| Not installed    | Connected to BEEP PCB pad | Enabled with a user- supplied BEEP output; the LDO must be enabled (see Table 4) |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9792A Evaluation Kit

## Speaker and Headphone Gain Setting

The default gain-setting resistor (R1) configures the speaker amplifier gain to 12dB, while the default gainsetting resistors (R3 and R4) configure the headphone amplifier gain to 0dB. The gain can be changed by replacing these resistors with other surface-mount 0603 resistors. Use ±1% tolerance resistors for optimum performance. See Table 6 and the following equations to select new gain-setting resistors in kilohms for the corresponding channel:

<!-- formula-not-decoded -->

where AVSPKR is the desired speaker voltage gain and RINSPKR is the speaker amplifier's input resistor (R1).

<!-- formula-not-decoded -->

where AVHP is the desired headphone voltage gain and RINHP is the headphone amplifier input resistors (R3 or R4).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Table 6. Component Function

| CHANNEL         | RIN   |
|-----------------|-------|
| Speaker         | R1    |
| Headphone right | R3    |
| Headphone left  | R4    |

<!-- image -->

## MAX9792A Evaluation Kit

Figure 1. MAX9792A EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9792A Evaluation Kit

Figure 2. MAX9792A EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9792A Evaluation Kit

<!-- image -->

Figure 3. MAX9792A EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9792A Evaluation Kit

Figure 4. MAX9792A EV Kit PCB Layout-Layer 2

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9792A Evaluation Kit

Figure 5. MAX9792A EV Kit PCB Layout-Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9792A Evaluation Kit

Figure 6. MAX9792A EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9792A Evaluation Kit

Figure 7. MAX9792A EV Kit Component Placement Guide-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

SPRINGER