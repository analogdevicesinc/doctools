<!-- lastmod 2022-08-04 -->
<!-- image -->

## MAX14535E Evaluation Kit

## General Description

The MAX14535E evaluation kit (EV kit) demonstrates the MAX14535E double-pole/double-throw (DPDT) analog switch featuring negative signal capability, low onresistance (0.135 Ω RON), and input shunt resistors on the NO\_ terminals for click-and-pop reduction in portable audio applications. The IC features a spacesaving ultra-thin QFN package. The EV kit can operate from a +2.4V to +5.5V DC power supply and comes configured to operate from USB power.

| DESIGNATION   |   QTY | DESCRIPTION                                                         |
|---------------|-------|---------------------------------------------------------------------|
| C1, C3-C7     |     6 | 0.1µF ±10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104K |
| C2            |     1 | 10µF ±10%, 10V X7R ceramic capacitor (0805) Murata GRM21BR71A106K   |
| FB1           |     0 | Not installed, ferrite-bead inductor (0603)                         |
| JU1, JU2, JU3 |     3 | 3-pin headers                                                       |

## Features

- ♦ Input Shunt Resistors for Built-In Click-and-Pop Reduction
- ♦ Low 0.135 Ω On-Resistance (RON)
- ♦ -1.5V to Min (3V or VCC) Analog Signal Capability
- ♦ +2.4V to +5.5V DC Supply Operation
- ♦ Demonstrates USB Power Operation
- ♦ Lead(Pb)-Free and RoHS Compliant
- ♦ Fully Assembled and Tested

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX14535EEVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                       |
|---------------|-------|-------------------------------------------------------------------|
| OUT           |     1 | Stereo headphone jack (3.5mm)                                     |
| R1-R4         |     4 | 0 ±5% resistors (1206)                                            |
| USB           |     1 | USB type-B right-angle receptacle                                 |
| U1            |     1 | DPDT analog switch (10 UTQFN) Maxim MAX14535EEVB+ (Top Mark: AAS) |
| -             |     3 | Shunts (JU1, JU2, JU3)                                            |
| -             |     1 | PCB: MAX14535E Evaluation Kit+                                    |

## Component Supplier

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |

Note: Indicate that you are using the MAX14535E when contacting this component supplier.

1

## MAX14535E Evaluation Kit

## Quick Start

## Required Equipment

- User-supplied PC with a spare USB port
- A-to-B USB cable
- One stereo headphone
- Two audio signal sources ranging between -1.5V and +3V

## Procedure

The MAX14535E EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not connect a signal to the NO\_1, NO\_2, NC\_1, or NC\_2 PCB pads until a powered USB cable is connected to the USB receptacle or until power is supplied across the VIN and GND PCB pads.

- 1) Connect the powered USB cable from the computer to the EV kit's USB receptacle.
- 2) Verify that shunts are installed as follows:
- 3) Verify that the audio source outputs are disabled.
- 4) Connect one audio source's right channel to the NC\_1 PCB pad, the left channel to the NC\_2 PCB pad, and the audio ground return to the nearby GND PCB pad.
- 5) Connect the other audio source's right channel to the NO\_1 PCB pad, the left channel to the NO\_2 PCB pad, and the audio ground return to the nearby GND PCB pad.
- 6) Plug the headphone into the OUT headphone jack.
- 7) Enable the audio sources.
- 8) Verify that the headphone is playing the audio

JU1: Pins 1-2 (USB power)

JU2: Pins 1-2 (switches enabled)

JU3: Pins 2-3 (NC\_ terminals selected)

## Table 1. Power Supply Configuration (JU1)

| SHUNT POSITION   | VCC PIN CONNECTION   | MAX14535E VCC POWER                                                            |
|------------------|----------------------|--------------------------------------------------------------------------------|
| 1-2*             | +5V                  | Connect a powered USB cable to the USB receptacle. VCC set to +5V USB power.** |
| 2-3              | VIN PCB pad          | User-provided DC power supply. VCC range: +2.4V to +5.5V**                     |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

- source connected to the NC\_1 and NC\_2 PCB pads.
- 9) Move the jumper JU3 shunt to pins 1-2.
- 10) Verify that the headphone is playing the audio source connected to the NO\_1 and NO\_2 PCB pads.

## Detailed Description of Hardware

The MAX14535E evaluation kit (EV kit) demonstrates the MAX14535E DPDT analog switch in a 1.4mm x 1.8mm, 10-pin ultra-thin QFN package specified for operating over the -40°C to +85°C extended temperature range. The IC features internal input shunt resistors on the NO\_ terminals. This provides coupling capacitors a place to discharge while the switch is set to the NC\_ terminals providing click-and-pop reduction without additional parts in portable audio applications. The IC features low 0.135 Ω RON resistance. An active-high enable pin (EN) sets the switches to either high-impedance mode or normal operation. The COM1, COM2, NC\_1, NC\_2, NO\_1, and NO\_2 PCB pads can pass up to  ±300mA  of  continuous  current  through  the MAX14535E IC. The EV kit can operate from a +2.4V to +5.5V DC power supply and also comes configured to operate from USB power.

The user may install optional input resistors in place of the default 0 Ω resistors (R1-R4). PCB pads COM1, COM2, and GND provide access to the headphone jack OUT signals.

## Power Supply

Jumper JU1 provides two options for powering the MAX14535E VCC supply input. VCC can operate from a user-supplied +2.4V to +5.5V DC power supply connected across the VIN and GND PCB pads or from a +5V USB power source. See Table 1 to configure the VCC supply options using jumper JU1.

## MAX14535E Evaluation Kit

## Switch Enable

Jumper JU2 configures the MAX14535E enable input (EN). The EN signal can also be driven by an external controller using the EN and nearby GND PCB pads. To use an external controller, remove capacitor C6. See Table 2 to set EN using jumper JU2.

## Table 2. Switch Enable Configuration (JU2)

| SHUNT POSITION   | EN PIN CONNECTION   | SWITCH ENABLE                                      |
|------------------|---------------------|----------------------------------------------------|
| 1-2*             | VCC                 | Switch enabled                                     |
| 2-3              | GND                 | Switch set to high impedance                       |
| -                | EN PCB pad          | Driven by external controller; remove capacitor C6 |

## Table 3. Digital Control Configuration (JU3)

| SHUNT POSITION   | CB PIN CONNECTION   | SWITCH POSITION                                    |
|------------------|---------------------|----------------------------------------------------|
| 1-2              | VCC                 | NO_                                                |
| 2-3*             | GND                 | NC_                                                |
| -                | CB PCB pad          | Driven by external controller; remove capacitor C7 |

<!-- image -->

## Digital Control

Jumper JU3 configures the MAX14535E digital-control bit (CB). The CB input sets the position of the switches to either the NO\_ or NC\_ terminals. The CB signal can also be driven by an external controller using the CB and nearby GND PCB pads. To use an external controller,  remove  capacitor C7. See Table 3 to set CB using jumper JU3.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX14535E Evaluation Kit

Figure 1. MAX14535E EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX14535E Evaluation Kit

<!-- image -->

Figure 2. MAX14535E EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX14535E EV Kit PCB Layout-Component Side

Figure 4. MAX14535E EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

5