<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAX13331 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that evaluates the MAX13331 DirectDrive ® stereo headphone amplifier. DirectDrive eliminates the two large DCblocking capacitors typically required between the output  of  the  amplifier  and  the  headphones.  The MAX13331 EV kit includes two RCA phono jacks on the input and a 3.5mm headphone jack on the output to facilitate easy connections to the circuit board.

The MAX13331 EV kit can also evaluate the MAX13330 IC. This requires the IC replacement of U1.

DirectDrive is a registered trademark of Maxim Integrated Products, Inc.

| DESIGNATION   |   QTY | DESCRIPTION                                                                             |
|---------------|-------|-----------------------------------------------------------------------------------------|
| C1, C2        |     2 | 1µF ±10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C105K TDK C1608X7R1C105K    |
| C3, C4, C11   |     3 | 1000pF ±10%, 50V X7R ceramic capacitors (0402) Murata GRM155R71H102K TDK C1005X7R1H102K |
| C5, C7, C8    |     3 | 1µF ±10%, 10V X7R ceramic capacitors (0603) Murata GRM188R71A105K TDK C1608X7R1A105K    |
| C6, C9, C14   |     3 | 0.1µF ±10%, 16V X7R ceramic capacitors (0402) Murata GRM155R71C104K TDK C1005X7R1C104K  |
| C10           |     1 | 10µF ±10%, 10V X7R ceramic capacitor (0805) Murata GRM21BR71A106K                       |
| C12, C13      |     2 | 0.01µF ±10%, 50V X7R ceramic capacitors (0402) Murata GRM155R71H103K                    |

## Features

- ♦ No DC-Blocking Capacitors Required
- ♦ 4V to 5.5V Single-Supply Operation
- ♦ Adjustable Gain (MAX13331 Only)
- ♦ 125mW Per Channel into 32 Ω at 0.01% THD+N
- ♦ Shutdown Control
- ♦ Ultra-Compact Solution
- ♦ Low-Profile (1.2mm, max) Design
- ♦ Lead(Pb)-Free and RoHS Compliant
- ♦ Fully Assembled and Tested Surface-Mount Board

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX13331EVKIT+ | EV Kit |

## Component List

| DESIGNATION      |   QTY | DESCRIPTION                                                               |
|------------------|-------|---------------------------------------------------------------------------|
| J1               |     1 | 3.5mm stereo headphone jack                                               |
| JU1              |     1 | 2-pin header, 0.1in centers                                               |
| JU2              |     0 | Not installed, 2-pin header, 0.1in centers                                |
| OUTL, OUTR, SGND |     0 | Not installed, miniature test points                                      |
| P1               |     1 | RCA phono jack (side-entry PCB mount), white                              |
| P2               |     1 | RCA phono jack (side-entry PCB mount), red                                |
| R1, R2, R5       |     3 | 15k Ω ±1% resistors (0402)                                                |
| R3, R4           |     2 | 22.6k Ω ±1% resistors (0402)                                              |
| U1               |     1 | Automotive DirectDrive headphone amplifier (16 QSOP) Maxim MAX13331GEE/V+ |
| -                |     1 | Shunt                                                                     |
| -                |     1 | PCB: MAX13331 EVALUATION KIT+                                             |

1

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX13331 Evaluation Kit

## Procedure

The MAX13331 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Plug the headphones into the 3.5mm headphone jack (J1).
- 2) Ensure that the stereo audio source is turned off.
- 3) Connect the disabled stereo audio source through the RCA phono jacks (P1 and P2).
- 4) Ensure that a shunt is installed on jumper JU1.
- 5) Connect the 4V to 5.5V DC power supply to the VDD and PGND pads.
- 6) Turn on the DC power supply.
- 7) Verify that the audio source level is low.
- 8) Enable the stereo audio source.
- 9) Verify that the audio source signal is clearly heard from the headphones.

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note:

Indicate that you are using the MAX13331 when contacting these component suppliers.

## Quick Start

## Required Equipment

- One pair of 8 Ω to 32 Ω headphones
- One variable DC power supply capable of supplying between 4V and 5.5V at 500mA
- One stereo audio source

## Detailed Description of Hardware

The MAX13331 EV kit is a stereo, single-supply headphone amplifier. The input impedance is 15k Ω .  The -3dB corner frequencies are approximately 10Hz and greater than 22kHz and are dependent on components R1/C1 and R2/C2. The MAX13331 EV kit has a gain of approximately 1.5 and can be powered with a 4V to 5.5V supply

The EV kit provides two RCA phono jacks (P1 and P2) to facilitate the connection of an audio source. In addition,  both  outputs  (OUTL and OUTR) are routed to a stereo headphone jack (J1), facilitating output monitoring. Shutdown control of OUTL and OUTR is also provided through jumper JU1.

## Shutdown Control

The MAX13331 EV kit provides jumper JU1 to disable the outputs, OUTL and OUTR (see Table 1 for shutdown shunt positions). Both OUTL and OUTR are routed to the headphone jack (J1).

## Layout Considerations

To optimize the audio performance of the MAX13331, it is important to follow these layout guidelines. The MAX13331 EV kit uses two ground planes to minimize switching noise. The two planes are star-connected at one point (JU2 pad). Capacitors C5, C6, C8, C12, C13, and C14 should be placed close to the IC. Refer to the MAX13331 IC data sheet for additional layout considerations.

The MAX13331 EV kit is a four-layer design, but it is possible to design the MAX13331 circuit on to a twolayer board. For a two-layer design, optimize the signal and power ground planes by maximizing the area and connecting each plane, as close as possible, to its respective IC pin.

## Table 1. Jumper JU1 Function

| SHUNT POSITION   | DESCRIPTION      |
|------------------|------------------|
| Installed        | Outputs enabled  |
| Not installed    | Outputs disabled |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX13331 Evaluation Kit

Figure 1. MAX13331 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

3

## MAX13331 Evaluation Kit

Figure 2. MAX13331 EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 3. MAX13331 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX13331 Evaluation Kit

<!-- image -->

Figure 4. MAX13331 EV Kit PCB Layout-Internal Layer 2

<!-- image -->

Figure 5. MAX13331 EV Kit PCB Layout-Internal Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX13331 Evaluation Kit

Figure 7. MAX13331 EV Kit Component Placement Guide-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX13331 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                       | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------------------------------------------------|-----------------|
|                 0 | 3/09            | Initial release                                                                   | -               |
|                 1 | 4/09            | Updated schematic and PCB layout diagrams with routing changes on jacks P1 and P2 | 3-6             |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ 7