<!-- lastmod 2022-08-03 -->
## General Description

The MAX4993 evaluation kit (EV kit) demonstrates the MAX4993 double-pole/double-throw (DPDT) analog switch featuring low on-resistance (0.3 Ω RON) and slow turn-on time for click-and-pop reduction in portable audio applications. The IC features a space-saving package, low THD+N (0.004%), and low supply current (1.2µA at 3V). The EV kit can operate from a 1.8V to 5.5V DC power supply and comes configured to operate from USB power.

| DESIGNATION        |   QTY | DESCRIPTION                                                                 |
|--------------------|-------|-----------------------------------------------------------------------------|
| C1, C3, C4, C5, C8 |     5 | 0.1µF ±10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104K         |
| C2                 |     1 | 10µF ±10%, 10V X7R ceramic capacitor (0805) Murata GRM21BR71A106K           |
| C6, C7             |     2 | 220µF ±10%, 6.3V low-ESR tantalum capacitors (D size) KEMET B45197A1227K409 |
| FB1                |     0 | Not installed, ferrite-bead inductor-short (0603)                           |
| GND, OUTL, OUTR    |     0 | Not installed, miniature PCB test points                                    |

<!-- image -->

## Features

- ♦ Demonstrates Slow Turn-On for Built-In Clickand-Pop Reduction
- ♦ Low 0.3 Ω On-Resistance (RON)
- ♦ 0.004% THD+N in Audio Applications
- ♦ 1.8V to 5.5V DC Supply Operation
- ♦ Demonstrates USB Power Operation
- ♦ Lead(Pb)-Free and RoHS Compliant
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX4993EVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                    |
|---------------|-------|----------------------------------------------------------------|
| JU1, JU2, JU3 |     3 | 3-pin headers                                                  |
| JU4, JU5      |     2 | 2-pin headers                                                  |
| OUT           |     1 | Stereo headphone jack (3.5mm)                                  |
| R1-R4         |     4 | 0 Ω ±5% resistors (1206)                                       |
| R5, R7        |     2 | 330 Ω ±5% resistors (0603)                                     |
| R6, R8        |     2 | 150 Ω ±5% resistors (0603)                                     |
| U1            |     1 | DPDT audio switch (10 UTQFN) Maxim MAX4993EVB+ (Top Mark: AAF) |
| USB           |     1 | USB type-B right-angle receptacle                              |
| -             |     5 | Shunts (JU1-JU5)                                               |
| -             |     1 | PCB: MAX4993 Evaluation Kit+                                   |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| KEMET Corp.                            | 864-963-6300 | www.kemet.com               |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |

Note: Indicate that you are using the MAX4993 when contacting these suppliers.

## MAX4993 Evaluation Kit

## Quick Start

## Required Equipment

- User-supplied PC with a spare USB port
- A-to-B USB cable
- One stereo headphone
- Two audio signal sources ranging between 0 and 5V

## Procedure

The MAX4993 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not connect a signal to the NO\_1, NO\_2, NC\_1, or NC\_2 PCB pads until power is supplied to VCC.

- 1) Connect the powered USB cable from the computer to the EV kit's USB receptacle.
- 2) Verify that shunts are installed as follows:
3. JU1: Pins 1-2 (USB power to VCC)
4. JU2: Pins 1-2 (NO\_ terminals selected)
5. JU3: Pins 2-3 (switches enabled)
6. JU4: Not installed (no input DC biasing on NO\_1 PCB pad)
7. JU5: Not installed (no input DC biasing on NO\_2 PCB pad)
- 3) Verify that the stereo audio source outputs are disabled.
- 4) Connect one audio source's right channel to the NO\_1 PCB pad, the left channel to the NO\_2 PCB pad, and the audio ground return to the nearby GND PCB pad.
- 5) Connect the other audio source's right channel to the NC\_1 PCB pad, the left channel to the NC\_2 PCB pad, and the audio ground return to the nearby GND PCB pad.
- 6) Plug the headphone into the OUT headphone jack.
- 7) Enable the audio sources.
- 8) Verify that the headphone is playing the audio source connected to the NO\_1 and NO\_2 PCB pads.
- 9) Move the jumper JU2 shunt to pins 2-3.
- 10) Verify that the headphone is playing the audio source connected to the NC\_ 1 and NC\_2 PCB pads.

## Detailed Description of Hardware

The MAX4993 evaluation kit (EV kit) demonstrates the MAX4993 DPDT analog switch in a 1.4mm x 1.8mm 10pin ultra-thin QFN package specified for operating over the  -40°C to +85°C extended temperature range. The IC's slow turn-on time provides click-and-pop reduction without additional parts in portable audio applications. The IC features low 0.3 Ω RON resistance, low 0.004% THD+N distortion in audio applications, and demonstrates low supply current. An active-low output enable pin ( EN ) can set the switches to high-impedance mode. The COM\_, NC\_1, NC\_2, NO\_1, and NO\_2 PCB pads can pass up to ±350mA of continuous current through the MAX4993 IC. The EV kit can operate from a 1.8V to 5.5V DC power supply and also comes configured to operate from USB power.

The user may install optional input resistors in place of the default 0 Ω resistors (R1-R4). Resistor-divider pairs R5/R6 and R7/R8 and jumpers JU4 and JU5 provide the ability to add a DC bias to the NO\_1 and NO\_2 PCB pads for demonstrating the slow turn-on feature. Capacitors C6 and C7 provide DC voltage blocking for the OUT headphone jack signals. Test points OUTL, OUTR, and GND provide access to the OUT headphone jack signals.

## Power Supply

Jumper JU1 provides two options for powering the MAX4993 VCC supply input. VCC can operate from a user-supplied 1.8V to 5.5V DC power supply connected across the VIN and GND PCB pads or from a 5V USB power source. See Table 1 to configure the VCC supply options using jumper JU1.

## Table 1. Power Supply Configuration (JU1)

| SHUNT POSITION   | VCC PIN CONNECTION   | MAX4993 VCC POWER                                                       |
|------------------|----------------------|-------------------------------------------------------------------------|
| 1-2*             | +5V bus              | Connect a powered USB cable to receptacle USB. VCC set to 5V USB power. |
| 2-3              | VIN PCB pad          | User-provided DC power supply. VCC range: 1.8V to 5.5V.                 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Digital Control

Jumper JU2 configures the MAX4993 digital-control bit, CB. The CB input sets the position of the switches to either the NO\_ or NC\_ terminals. Remove capacitor C8 to drive the CB signal using an external controller connected to the CB and nearby GND PCB pads. See Table 2 to set CB using jumper JU2.

## Switch Enable

Jumper JU3 configures the MAX4993 enable input, EN . The EN signal can also be driven by an external controller  using  the EN and nearby GND PCB pads. See Table 3 to set EN using jumper JU3.

Table 2. Digital Control Configuration (JU2)

| SHUNT POSITION   | CB PIN                  | SWITCH POSITION                                     |
|------------------|-------------------------|-----------------------------------------------------|
| 1-2*             | Connected to VCC        | NO_                                                 |
| 2-3              | Connected to GND        | NC_                                                 |
| -                | Connected to CB PCB pad | Driven by external controller. Remove capacitor C8. |

Table 3. Switch Enable Configuration (JU3)

| SHUNT POSITION   | EN PIN                  | SWITCH ENABLE                  |
|------------------|-------------------------|--------------------------------|
| 1-2              | Connected to VCC        | Switches set to high impedance |
| 2-3*             | Connected to GND        | Switches enabled               |
| -                | Connected to EN PCB pad | Driven by external controller  |

<!-- image -->

## MAX4993 Evaluation Kit

## NO\_ DC Offset

Jumpers JU4 and JU5 give the option to provide a DC offset to the NO\_1 and NO\_2 PCB pads, respectively. Install  shunts  on  jumpers  JU4  and JU5 to enable the DC offset voltages. Resistor-dividers R5/R6 and R7/R8 are configured to provide an offset voltage given by the equation below:

<!-- formula-not-decoded -->

where VOFFSET is the offset voltage applied to the NO\_1 and NO\_2 PCB pads and VCC is the MAX4993 supply voltage.

To use a different offset voltage, select a different value for R6 and R8 and use the equation below to determine R5 and R7:

<!-- formula-not-decoded -->

where the suggested RBOTTOM range is 100 Ω to 1M Ω and RBOTTOM is resistor R6 or R8, RTOP is resistor R5 or R7, the VCC range is 1.8V to 5.5V, and VOFFSET is the desired offset voltage.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4993 Evaluation Kit

Figure 1. MAX4993 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4993 Evaluation Kit

<!-- image -->

Figure 2. MAX4993 EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 3. MAX4993 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4993 Evaluation Kit

Figure 4. MAX4993 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

SPRINGER