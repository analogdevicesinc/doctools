<!-- lastmod 2022-08-04 -->
<!-- image -->

## MAX3991/MAX3992 Evaluation Kit

## General Description

The MAX3991/MAX3992 evaluation kit (EV kit) simplifies evaluation of both receiver (MAX3991) and transmitter (MAX3992) XFP signal conditioning ICs. This EV kit allows testing of all the MAX3991 and MAX3992 features. A single reference clock provides timing for both the MAX3991 and MAX3992. The recovered clock outputs can be enabled for jitter testing.

| DESIGNATION                                                              |   QTY | DESCRIPTION                                     |
|--------------------------------------------------------------------------|-------|-------------------------------------------------|
| C1, C4, C6, C9                                                           |     4 | 0.1µF ± 10%, 10V ceramic capacitors (0402)      |
| C2, C3, C7, C8                                                           |     4 | 22µF ± 5%, 10V min tantalum capacitors (B case) |
| C5, C19, C20, C22, C23, C27, C28, C33, C34, C38, C39, C41, C42, C44, C45 |    15 | 0.01µF ± 5%, 10V ceramic capacitors (0402)      |
| C18, C21, C25, C26, C29-C32, C35, C40, C43, C51                          |    12 | 0.01µF ± 10%, 6.3V ceramic capacitors (0201)    |
| C24, C52                                                                 |     2 | 0.047µF ± 10%, 10V ceramic capacitors (0402)    |
| D1-D4                                                                    |     4 | Red LEDs (T1 package)                           |
| J1-J4                                                                    |     4 | Test points                                     |
| J5-J12, J14-J19                                                          |    14 | SMA connectors, side-mount tab Digi-Key J502-ND |
| JU1-JU6                                                                  |     6 | 3-pin headers, 0.1in spacing                    |
| L1, L2                                                                   |     2 | 4.7µH ± 10% inductors Coilcraft 1008LS-472XKBC  |

Features

- ♦ Fully Assembled and Tested
- ♦ Low Loss Dielectric Transmission Lines
- ♦ SMA Connectors for Ease in Lab Testing
- ♦ Separate +3.3V Supply Operation

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX3991EVKIT# | EV Kit |

#Denotes RoHS compliant.

## Component List

| DESIGNATION        |   QTY | DESCRIPTION                                                                      |
|--------------------|-------|----------------------------------------------------------------------------------|
| Q1-Q4              |     4 | npn transistors (SOT23) FMMT491A                                                 |
| R12, R16, R19, R29 |     4 | 511 1% resistors (0603)                                                          |
| R13, R17, R25, R30 |     4 | 4.7k 5% resistors (0603)                                                         |
| R31, R34           |     2 | 20k variable resistors Bourns 3296W-1-203LF                                      |
| R32, R35           |     2 | 10k ± 5% resistors (0402)                                                        |
| R33, R36           |     2 | 1k ± 5% resistors (0402)                                                         |
| TP1-TP4, TP11-TP14 |     8 | Test points                                                                      |
| U6                 |     1 | 10Gbps clock and data recovery with limiting amplifier (24 QFN) Maxim MAX3991UTG |
| U7                 |     1 | 10Gbps clock and data recovery with equalizer (24 QFN) Maxim MAX3992UTG          |
| None               |     6 | Shunts                                                                           |
| None               |     1 | PCB: MAX3991/MAX3992 EV Kit Board                                                |

1

## MAX3991/MAX3992 Evaluation Kit

## Component Suppliers

| SUPPLIER                         | PHONE        | WEBSITE                     |
|----------------------------------|--------------|-----------------------------|
| AVX                              | 843-946-0238 | www.avxcorp.com             |
| Coilcraft                        | 847-639-6400 | www.coilcraft.com           |
| Murata Electronics North America | 770-436-1300 | www.murata-northamerica.com |
| Zetex Semiconductors             | 631-543-7100 | www.zetex.com               |

Note: Please indicate that you are using the MAX3991/MAX3992 when contacting these component suppliers.

## MAX3991 Quick Start

- 1) Connect the data signal to J5 (SDI+) and J6 (SDI-).
- 2) Connect a reference clock at 1/16th or 1/64th the data rate to J18 and J19.
- 3) Connect SDO+ and SDO- to the 50 Ω inputs of a high-speed oscilloscope at J9 and J10.
- 4) Connect a +3.3V supply to the VCC terminal J1 and ground to the GND terminal J2. (There is a voltage drop across L1, so verify VCC = 3.3V at TP11.)
- 5) Set VTH (using R31) to 10x the desired LOS assert level. For example, 200mV at TP13 results in a typical  assert  level  of  20mVP-P.  Alternatively,  the  LOS circuit  can  be  disabled  by  turning  R31  fully  clockwise.

## MAX3992 Quick Start

- 1) Connect the data signal to J16 (SDI-) and J17 (SDI+).
- 2) Connect a reference clock at 1/16th or 1/64th the data rate to J18 and J19.
- 3) Connect SDO+ and SDO- to the 50 Ω inputs of a high-speed oscilloscope at J11 and J12.
- 4) Connect a +3.3V supply to the VCC terminal J3 and ground to the GND terminal J4. (There is a voltage drop across L2, so verify VCC = 3.3V at TP12.)
- 5) Disable the LOS detector by turning R34 fully clockwise.
- 6) Set the FCTL1 pins (JU1 and JU2) to ground. Doing so disables SCLKO. Refer to Table 1 for other control options.
- 6) Set the FCTL2 pins (JU3 and JU4) to ground. Doing so disables SCLKO. Refer to Table 1 for other control options.

## Table 1. Adjustments and Control Descriptions

| COMPONENT   | NAME                       | FUNCTION                                                          | FUNCTION                                                          | FUNCTION                                                          |
|-------------|----------------------------|-------------------------------------------------------------------|-------------------------------------------------------------------|-------------------------------------------------------------------|
| JU1, JU2    | FCTL1-1, FCTL1-2 (MAX3991) | FCTL1-1                                                           | FCTL1-2                                                           | MODE                                                              |
| JU1, JU2    | FCTL1-1, FCTL1-2 (MAX3991) | GND                                                               | GND                                                               | Normal operation-serial clock disabled.                           |
| JU1, JU2    | FCTL1-1, FCTL1-2 (MAX3991) | VCC                                                               | GND                                                               | Standby-power-down mode.                                          |
| JU1, JU2    | FCTL1-1, FCTL1-2 (MAX3991) | GND                                                               | VCC                                                               | Serial data output disabled.                                      |
| JU1, JU2    | FCTL1-1, FCTL1-2 (MAX3991) | VCC                                                               | VCC                                                               | Serial clock cutput enabled for jitter testing.                   |
| JU3, JU4    | FCTL2-2, FCTL2-1 (MAX3992) | FCTL2-2                                                           | FCTL2-1                                                           | MODE                                                              |
| JU3, JU4    | FCTL2-2, FCTL2-1 (MAX3992) | GND                                                               | GND                                                               | Normal operation-serial clock disabled.                           |
| JU3, JU4    | FCTL2-2, FCTL2-1 (MAX3992) | VCC                                                               | GND                                                               | Standby-power-down mode.                                          |
| JU3, JU4    | FCTL2-2, FCTL2-1 (MAX3992) | GND                                                               | VCC                                                               | Serial data output disabled.                                      |
| JU3, JU4    | FCTL2-2, FCTL2-1 (MAX3992) | VCC                                                               | VCC                                                               | Serial clock output enabled for jitter testing.                   |
| JU5, JU6    | POLARITY                   | Polarity Control. Set to VCC or leave open for standard polarity. | Polarity Control. Set to VCC or leave open for standard polarity. | Polarity Control. Set to VCC or leave open for standard polarity. |
| R31, R34    | VTH                        | Apply the desired threshold for loss of signal.                   | Apply the desired threshold for loss of signal.                   | Apply the desired threshold for loss of signal.                   |
| D1, D4      | LOL2, LOL1                 | Loss-of-lock indicator.                                           | Loss-of-lock indicator.                                           | Loss-of-lock indicator.                                           |
| D2, D3      | LOS2, LOS                  | Loss-of-signal indicator.                                         | Loss-of-signal indicator.                                         | Loss-of-signal indicator.                                         |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3991/MAX3992 Evaluation Kit

<!-- image -->

Figure 1. MAX3991/MAX3992 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3991/MAX3992 Evaluation Kit

Figure 2. MAX3991/MAX3992 EV Kit PCB Component Placement Guide-Component Side

<!-- image -->

Figure 3. MAX3991/MAX3992 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3991/MAX3992 Evaluation Kit

Figure 4. MAX3991/MAX3992 EV Kit PCB Layout-Ground Plane

<!-- image -->

<!-- image -->

Figure 5. MAX3991/MAX3992 EV Kit PCB Layout-Power Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3991/MAX3992 Evaluation Kit

Figure 6. MAX3991/MAX3992 EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3991/MAX3992 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                              | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------------|-----------------|
|                 0 | 1/05            | Initial release.                         | -               |
|                 1 | 11/08           | Complete rewrite due to crosstalk issue. | All             |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ 7