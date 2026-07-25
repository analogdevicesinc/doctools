<!-- lastmod 2022-08-03 -->
## General Description

The MAX9730 evaluation kit (EV kit) is a fully assembled and tested PCB that uses the MAX9730 Class G power amplifier to drive a bridge-tied-load (BTL) speaker in portable audio applications. Designed to operate from a  2.7V  to  5.5VDC  power supply, the EV kit accepts a single-ended or differential input signal. The EV kit provides a fully differential output capable of delivering 2.4W into an 8 Ω speaker.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                   |
|---------------|-------|-------------------------------------------------------------------------------|
| C1-C4         |     4 | 0.1µF ±10%, 6.3V X5R ceramic capacitors (0402) Murata GRM155R60J104K          |
| C5, C6        |     2 | 1µF ±10%, 6.3V X5R ceramic capacitors (0402) Murata GRM155R60J105K            |
| C7            |     1 | 4.7µF ±10%, 6.3V X5R ceramic capacitor (1206) Murata GRM31CR60J475K           |
| C8, C9, C10   |     3 | 10µF ±20%, 6.3V X5R ceramic capacitors (0603) Murata GRM188R60J106M           |
| JU1           |     1 | 3-pin header                                                                  |
| R1-R4         |     4 | 10k Ω ±0.5% precision-thick film-chip resistors (0603) Panasonic ERJ3RBD1002V |
| R5            |     1 | 100k Ω ±1% resistor (0603)                                                    |
| U1            |     1 | MAX9730ETI+ (28-pin TQFN, 4mm x 4mm x 0.8mm)                                  |
| -             |     1 | Shunt                                                                         |
| -             |     1 | PCB: MAX9730 evaluation kit                                                   |

## Component Suppliers

| SUPPLIER              | PHONE        | WEBSITE           |
|-----------------------|--------------|-------------------|
| Murata Mfg. Co., Ltd. | 770-436-1300 | www.murata.com    |
| Panasonic Corp.       | 714-373-7366 | www.panasonic.com |

Note: Indicate that you are using the MAX9730 when contacting these component suppliers.

<!-- image -->

Features

- ♦ 5V Single-Supply Operation
- ♦ Fully Differential Output
- ♦ Delivers 2.4W into an 8 Ω Speaker
- ♦ Configurable Switching Frequency
- ♦ Evaluates the MAX9730 in a 28-Pin TQFN (4mm x 4mm x 0.8mm) Package
- ♦ MAX9730 IC Available in a 20-Bump UCSP (2mm x 2.5mm) Package
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TEMP RANGE    | IC PACKAGE                       |
|---------------|---------------|----------------------------------|
| MAX9730EVKIT+ | 0°C to +70°C* | 28 TQFN-EP** (4mm x 4mm x 0.8mm) |

## Quick Start

## Recommended Equipment

- 5V, 2A power supply
- Audio source (i.e., CD player, MP3 player, etc.)
- One 8 Ω speaker

## Procedure

The MAX9730 EV kit is fully assembled and tested. Follow the steps listed below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Install a shunt across pins 1-2 of jumper JU1 (EV kit ON).
- 2) Connect the 8 Ω speaker across the OUT- and OUT+ pads.
- 3) Connect the ground terminal of the power supply to the GND pad and the positive terminal to the VCC pad.
- 4) Connect the positive terminal of the audio source to the IN+ pad.
- 5) Connect the negative terminal of the audio source to  the  IN-  pad.  Connect  the  IN-  pad  to  the  GND pad if the audio source is single-ended.
- 6) Connect the ground terminal of the audio source to the GND pad.
- 7) Turn on the audio source.
- 8) Turn on the power supply.

## MAX9730 Evaluation Kit

## Detailed Description

The MAX9730 EV kit features the MAX9730 Class G power amplifier IC, designed to drive a dynamic speaker in BTL configuration. The EV kit operates from a DC power supply that provides 2.7V to 5.5V and 2A of current.  The  EV  kit  accepts  single-ended or differential audio input and provides a fully differential output. The audio input source is amplified to drive 2.4W into an 8 Ω speaker with a 5V power supply.

## Customizing the Gain

The MAX9730 EV kit is shipped with a gain of +12dB and is set by resistors R1-R4. Change resistors R1-R4 to reconfigure the gain of the EV kit. Refer to the MAX9730 IC data sheet for more detail.

## Charge-Pump Frequency Set Resistor

The charge-pump frequency is set by resistor R5. The charge pump's normal operation frequency is 330kHz. Change R5 to change the charge-pump frequency.

Refer to the MAX9730 IC data sheet for more information.

## Jumper Selection

## Shutdown Mode ( SHDN )

Jumper JU1 controls the shutdown pin ( SHDN )  of  the MAX9730 IC. The shutdown pin can also be controlled by an external logic controller connected to the EV kit SHDN pad. Remove the shunt from jumper JU1 before connecting an external controller to the SHDN pad. See Table 1 for shunt positions.

## Table 1. JU1 Jumper Selection (Shutdown Mode)

| SHUNT POSITION   | SHDN PIN CONNECTED TO     | EV KIT FUNCTION                                                                               |
|------------------|---------------------------|-----------------------------------------------------------------------------------------------|
| 1-2*             | VDD                       | EV kit enabled                                                                                |
| 2-3              | GND                       | Shutdown mode                                                                                 |
| None             | External logic controller | SHDN driven by external logic controller. Shutdown is active-low and is 1.8V logic compliant. |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9730 Evaluation Kit

<!-- image -->

Figure 1. MAX9730 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9730 Evaluation Kit

<!-- image -->

Figure 2. MAX9730 EV Kit Component Placement GuideComponent Side

Figure 3. MAX9730 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX9730 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4