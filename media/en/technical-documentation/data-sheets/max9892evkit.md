<!-- lastmod 2022-08-03 -->
## General Description

The MAX9892 evaluation kit (EV kit) is an assembled and tested PCB that evaluates the MAX9892 IC. The MAX9892 is an audio click-and-pop eliminator IC. The EV kit circuit includes an on-board MAX4338 headphone amplifier, two RCA audio input jacks, and a headphone jack to demonstrate the performance of the MAX9892. The EV kit operates from a 2.7V to 5.5V DC power supply.

The MAX9892 EV kit can also eliminate the audible clicks and pops of an external headphone amplifier connected to the EV kit. When utilizing an external headphone amplifier, the MAX9892 EV kit can operate from a lower input-voltage range of 1.7V to 5.5V DC.

UCSP is a trademark of Maxim Integrated Products, Inc.

| DESIGNATION   |   QTY | DESCRIPTION                                                           |
|---------------|-------|-----------------------------------------------------------------------|
| C1            |     1 | 0.1µF ±10%, 10V X5R ceramic capacitor (0603) Murata GRM188R61E104K    |
| C2            |     1 | 560pF ±5%, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H561J     |
| C3            |     1 | 1µF ±10%, 6.3V X5R ceramic capacitor (0402) Murata GRM155R60J105K     |
| C4            |     1 | 0.1µF ±10%, 6.3V X5R ceramic capacitor (0402) Murata GRM155R60J104K   |
| C5, C6        |     2 | 0.47µF ±10%, 6.3V X5R ceramic capacitors (0402) Murata GRM155R60J474K |
| C7, C8        |     2 | 100pF ±5%, 50V C0G ceramic capacitors (0402) Murata GRM1555C1H101J    |
| C9, C10, C11  |     3 | 220µF ±20%, 6.3V tantalum capacitors (C case) AVX TPSC227M006R0125    |
| GND, INL, INR |     0 | Not installed, test points                                            |
| HPOUT         |     1 | 3.5mm stereo headphone jack (SMT, 3 position, non switch)             |

<!-- image -->

## Features

- ♦ 2.7V to 5.5V DC Single-Supply Operation (OnBoard Headphone Amplifier)
- ♦ 1.7V to 5.5V DC Single-Supply Operation (External Headphone Amplifier)
- ♦ Proven Audio PCB Layout
- ♦ On-Board MAX4338 Headphone Amplifier
- ♦ RCA Audio Input Jacks
- ♦ Headphone Output Jack
- ♦ PCB Pads for Audio Input and Output Signals
- ♦ Evaluates the MAX9892ERT+ in a 6-Bump UCSP™ (2 x 3 Array) Package
- ♦ Lead(Pb)-Free and RoHS Compliant
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX9892EVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                |
|---------------|-------|----------------------------------------------------------------------------|
| JU1, JU4      |     2 | 3-pin headers                                                              |
| JU2, JU3, JU5 |     3 | 2-pin headers                                                              |
| LIN           |     1 | RCA phono jack, white (side entry, PCB mount)                              |
| RIN           |     1 | RCA phono jack, red (side entry, PCB mount)                                |
| R1            |     1 | 100k ±5% resistor (0603)                                                   |
| R2            |     1 | 180k ±5% resistor (0603)                                                   |
| R3-R7         |     5 | 100k ±5% resistors (0402)                                                  |
| R8, R9        |     2 | 22.1k ±1% resistors (0402)                                                 |
| R10, R11      |     2 | 47.5k ±1% resistors (0402)                                                 |
| R12, R13      |     2 | 30 ±5% resistors (0603)                                                    |
| R14, R15      |     0 | Not installed, resistors (0603)                                            |
| U1            |     1 | Audio click-and-pop eliminator (6 UCSP) Maxim MAX9892ERT+T (Top Mark: AAE) |
| U2            |     1 | Headphone amplifier (10 µMAX ® ) Maxim MAX4338EUB+                         |
| -             |     5 | Shunts (JU1-JU5)                                                           |
| -             |     1 | PCB: MAX9892 Evaluation Kit+                                               |

µMAX is a registered trademark of Maxim Integrated Products, Inc.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX9892 Evaluation Kit

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| AVX Corporation                        | 843-946-0238 | www.avxcorp.com             |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |

Note: Indicate that you are using the MAX9892 when contacting these component suppliers.

## Quick Start

## Required Equipment

Before beginning, the following equipment is needed:

- MAX9892 EV kit
- 2.7V to 5.5V, 100mA DC power supply
- One stereo audio source
- One pair of headphones

## Procedure

The MAX9892 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Verify that a shunt is installed on pins 1-2 of jumper JU1. This configures the EV kit to accept power for both the MAX9892 and the on-board MAX4338 headphone amplifier.
- 2) Verify that shunts are installed on jumpers JU2 and JU3. This configures the MAX9892 to accept the on-board MAX4338 headphone amplifier outputs.
- 3) Verify that a shunt is installed on pins 1-2 of jumper JU4. This connects the MAX9892's MUTE pin to the MAX4338 SHDN1 and SHDN2 pins.
- 4) Verify  that  a  shunt  is  not  installed  on  jumper  JU5. This enables the on-board MAX4338 headphone amplifier outputs.
- 5) Connect the audio source outputs to the LIN and RIN RCA jacks.
- 6) Connect the headphone to the HPOUT headphone jack.
- 7) Connect the power supply across the VCC and GND PCB pads.
- 8) Turn on the audio source. Turn on the power supply and set the supply voltage to 5V.
- 9) Verify that audible click or pop sounds are not detected while removing and reinstalling the shunt on jumper JU5.

## Detailed Description of Hardware

The MAX9892 EV kit evaluates the MAX9892 IC, an audio click-and-pop eliminator in a 6-bump UCSP package. The MAX9892 provides low-impedance paths to ground for headphone amplifier outputs during startup and shutdown to eliminate audible clicks and pops.

The EV kit features an on-board MAX4338 headphone amplifier, two RCA audio input jacks, and a headphone jack to demonstrate the performance of the MAX9892. When utilizing the on-board headphone amplifier, the EV kit  operates from a 2.7V to 5.5V DC power supply connected to the VCC and GND pads.

The MAX9892 also eliminates audible click-and-pop sounds from an external headphone amplifier connected to the EV kit. To eliminate the audible clicks and pops from an external headphone amplifier, connect the  external  headphone amplifier outputs to the HPL, HPR, and GND PCB pads on the EV kit. Connect the external headphone amplifier shutdown signal(s) to the SHDN PCB pad, and the external headphone amplifier ground to the GND pad on the MAX9892 EV kit. See the Jumper Selection section to reconfigure jumpers JU1-JU4. The MAX9892 can operate from a lower input-voltage range of 1.7V to 5.5V DC connected between the VDD and GND PCB pads when operating with an external headphone amplifier.

## Jumper Selection

The MAX9892 EV kit can be configured to operate with an on-board headphone amplifier or an external headphone amplifier. Use jumpers JU1-JU4 to select between on-board or external headphone amplifier operation for the MAX9892 EV kit.

## MAX9892 EV Kit Power Supply (VCC/VDD)

When operating with the on-board headphone amplifier, the EV kit requires a single DC power supply with an input-voltage range between 2.7V and 5.5V connected between the VCC and GND pads. When operating with an external headphone amplifier, the MAX9892 EV kit can operate at a lower input-voltage range of 1.7V to 5.5V connected between the VDD and GND pads. Jumper JU1 configures the input power supply for the MAX9892 EV kit. Table 1 lists the selectable jumper options for JU1.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Table 1. JU1 Jumper Selection (VCC/VDD)

| SHUNT POSITION   | POWER SUPPLY CONNECTED TO           | HEADPHONE AMPLIFIER          |
|------------------|-------------------------------------|------------------------------|
| 1-2*             | VCC PCB pad (VCC = 2.7V to 5.5V DC) | On-board**                   |
| 2-3              | VDD PCB pad (VDD = 1.7V to 5.5V DC) | External                     |
| Not installed    | Unconnected                         | MAX9892 EV kit (not powered) |

## Headphone Amplifier Outputs (HPL, HPR)

When operating with the on-board headphone amplifier, the MAX9892 IC receives the headphone output signal from the on-board headphone amplifier. When operating with an external headphone amplifier, the MAX9892 IC receives the external headphone amplifier output signal connected to the HPL, HPR, and GND PCB pads on the MAX9892 EV kit.

Jumpers JU2 and JU3 provide an option to select between the on-board or external headphone amplifier outputs for the MAX9892 EV kit. Table 2 lists the selectable jumper options for JU2 and JU3.

Table 3. JU4, JU5 Jumpers Function ( MUTE )

| SHUNT POSITION   | SHUNT POSITION   | MAX9892 MUTE PIN CONNECTED                        |                             |
|------------------|------------------|---------------------------------------------------|-----------------------------|
| JU4              | JU5              | TO                                                | HEADPHONE AMPLIFIER OUTPUTS |
| 1-2*             | Not installed*   | MAX4338 shutdown pins and VCC through resistor R5 | Enabled (on-board)          |
| 1-2*             | Installed        | MAX4338 shutdown pins and GND                     | Disabled (on-board)         |
| 2-3              | Not installed    | SHDN PCB pad and external pulled up               | Enabled (external)          |
| 2-3              | Installed        | SHDN PCB pad and GND                              | Disabled (external)         |

<!-- image -->

## MAX9892 Evaluation Kit

## Table 2. JU2, JU3 Jumpers Function (HPL, HPR)

| SHUNT POSITION   | HEADPHONE AMPLIFIER OUTPUTS                                            |
|------------------|------------------------------------------------------------------------|
| Installed*       | On-board headphone amplifier (MAX4338)                                 |
| Not installed    | External headphone amplifier (connected to HPL, HPR, and GND PCB pads) |

*Default position.

## Mute and Shutdown Inputs ( MUTE , SHDN1 , SHDN2 , and SHDN )

When operating with the on-board headphone amplifier, connect the MAX9892 MUTE pin to the SHDN1 and SHDN2 pins of the on-board MAX4338 headphone amplifier.  When operating with an external headphone amplifier, connect the MAX9892 MUTE pin to the SHDN PCB pad on the MAX9892 EV kit. After the desired shutdown signal is properly connected to the MAX9892 MUTE pin,  use  the  MAX9892 MUTE pin  to  start  up  or shut down the headphone amplifier to demonstrate the performance of the MAX9892 IC.

Jumper JU4 selects between the on-board or external headphone amplifier shutdown input for the MAX9892 EV kit.  Jumper JU5 pulls the MAX9892 MUTE pin to ground to initiate shutdown for the headphone amplifier selected by jumper JU4. Table 3 lists the jumper options for JU4 and JU5.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9892 Evaluation Kit

Figure 1. MAX9892 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 2. MAX9892 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX9892 Evaluation Kit

Figure 3. MAX9892 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX9892 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

5