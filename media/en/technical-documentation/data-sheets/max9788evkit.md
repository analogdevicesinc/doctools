<!-- lastmod 2022-08-03 -->
## General Description

The MAX9788 evaluation kit (EV kit) is a fully assembled and tested PCB that uses the MAX9788 Class G amplifier to drive a bridge-tied-load (BTL) ceramic speaker in portable audio applications. Designed to operate from a  2.7V  to  5.5VDC  power supply, the EV kit accepts a single-ended or differential input signal and provides a fully  differential  output  capable  of  delivering  greater than 14VP-P into a ceramic speaker.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                   |
|---------------|-------|-------------------------------------------------------------------------------|
| C1, C2, C3    |     3 | 0.1µF ±10%, 6.3V X5R ceramic capacitors (0402) Murata GRM155R60J104K          |
| C5, C6        |     2 | 1µF ±10%, 6.3V X5R ceramic capacitors (0402) Murata GRM155R60J105K            |
| C7            |     1 | 4.7µF ±10%, 6.3V X5R ceramic capacitor (0603) Murata GRM188R60J475K           |
| C8, C9, C10   |     3 | 10µF ±20%, 6.3V X5R ceramic capacitors (0603) Murata GRM188R60J106M           |
| C11, C12      |     0 | Not installed, capacitors (0603)                                              |
| JU1           |     1 | 3-pin header                                                                  |
| OUT           |     1 | 3.5mm stereo phone jack (3-position, non-switch)                              |
| R1-R4         |     4 | 10k Ω ±0.5% precision thick-film chip resistors (0603) Panasonic ERJ3RBD1002V |
| R5            |     1 | 100k Ω ±1% resistor (0603)                                                    |
| R6, R7        |     2 | 5.1 Ω ±5% resistors (0805)                                                    |
| U1            |     1 | MAX9788EBP+ (20-bump, 4 x 5 UCSP, 2mm x 2.5mm)                                |
| -             |     1 | Shunt                                                                         |
| -             |     1 | PCB: MAX9788EVKIT+                                                            |

<!-- image -->

Features

- ♦ 5V Single-Supply Operation
- ♦ Fully Differential Output
- ♦ Delivers Greater than 14VP-P into a Ceramic Speaker
- ♦ Evaluates the MAX9788 in a 20-Bump UCSP (2mm x 2.5mm) Package
- ♦ The MAX9788 IC Also Available in 28-Pin (4mm x 4mm) TQFN Package
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TEMP RANGE    | IC PACKAGE               |
|---------------|---------------|--------------------------|
| MAX9788EVKIT+ | 0°C to +70°C* | 20 UCSP-20 (2mm x 2.5mm) |

## Component Suppliers

| SUPPLIER              | PHONE        | WEBSITE           |
|-----------------------|--------------|-------------------|
| Murata Mfg. Co., Ltd. | 770-436-1300 | www.murata.com    |
| Panasonic Corp.       | 714-373-7366 | www.panasonic.com |

Note: Indicate that you are using the MAX9788 when contacting these component suppliers.

## MAX9788 Evaluation Kit

## Quick Start

## Recommended Equipment

- 5V, 1A power supply
- Audio source (i.e., CD player, MP3 player)
- One ceramic speaker (recommended suppliers: Murata, Taiyo Yuden)

## Procedure

The MAX9788 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Install a shunt across pins 1-2 of jumper JU1 (EV kit ON).
- 2) Connect the ceramic speaker across the OUT- and OUT+ pads.
- 3) Connect the positive terminal of the power supply to the VCC pad and the ground terminal to the GND pad.
- 4) Connect the positive terminal of the audio source to the IN+ pad.
- 5) Connect the negative terminal of the audio source to  the  IN-  pad.  Connect the IN- pad to GND if the audio source is single ended.
- 6) Connect the ground terminal of the audio source to the GND pad.
- 7) Turn on the audio source.
- 8) Turn on the power supply.

## Detailed Description

The MAX9788 EV kit features the MAX9788 Class G amplifier IC, designed to drive a ceramic speaker in a BTL configuration. The EV kit operates from a DC power supply that provides 2.7V to 5.5V and 1A of current.

The EV kit accepts single-ended or a differential audio input and provides a fully differential output. The audio input source is amplified to drive greater than 14VP-P into a ceramic speaker.

## Customizing the Gain

The MAX9788 EV kit is shipped with a gain of +12dB. Change the resistors (R1-R4) to customize the gain of the EV kit (refer to the MAX9788 IC data sheet for details).

## Jumper Selection

## Shutdown Mode ( SHDN )

Jumper JU1 controls the shutdown pin ( SHDN )  of  the MAX9788 IC. The shutdown pin is also controlled by an external logic controller connected to the EV kit SHDN pad. Remove the shunt from jumper JU1 before connecting an external controller to the SHDN pad. See Table 1 for shunt positions.

## Table 1. Shutdown Mode, JU1 Jumper Selection

| SHUNT POSITION   | MAX9788 SHDN PIN CONNECTED TO   | EV KIT FUNCTION                                                                            |
|------------------|---------------------------------|--------------------------------------------------------------------------------------------|
| 1-2*             | VDD                             | EV kit enabled                                                                             |
| 2-3              | GND                             | Shutdown mode                                                                              |
| None             | External logic controller       | SHDN driven by external logic controller. Shutdown is active low and 1.8V logic compliant. |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9788 Evaluation Kit

<!-- image -->

Figure 1. MAX9788 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9788 Evaluation Kit

<!-- image -->

Figure 2. MAX9788 EV Kit Component Placement GuideComponent Side

Figure 3. MAX9788 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX9788 EV Kit PCB Layout-Solder Side

<!-- image -->

## Revision History

Pages changed at Rev 2: 1, 3, 4

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

- 4 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

CARDENAS