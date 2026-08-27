<!-- lastmod 2022-08-04 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX840/MAX843/MAX844 ICs are inverting, charge-pump DC-DC converters with low-noise, regulated outputs. Their low output ripple voltage makes these devices ideal for biasing the GaAsFETs commonly found in cellular telephone transmitters.

The MAX840 evaluation kit (EV kit) is a fully assembled and tested surface-mount board. The board is shipped with a MAX840 mounted, but it can be replaced by the MAX843 or MAX844. Provisions are made for mounting two additional resistors, which are required for output voltages other than -2V. A special scope-probe socket is also mounted on the board, so output noise can be observed on an oscilloscope.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ' 1mVp-p Output Voltage Ripple
- ' 2.5V to 10V Input Range
- ' Uses 0.22µF Capacitors
- ' -2V Regulated Output (or Adjustable)
- ' 4mA Output Current
- ' Surface-Mount Technology

<!-- image -->

## MAX840 Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                       |
|---------------|-------|-----------------------------------------------------------------------------------|
| C1, C2, C3    |     3 | 0.22µF ceramic capacitors Vitramon VJ1206Y224KXX Murata GRM42-6X7R224M025         |
| C4            |     1 | 4.7µF, 16V low-ESR tantalum capacitor, Sprague 595D475X0016A Matsuo 267E 2002 475 |
| R1, R2        |     0 | Open                                                                              |
| J1            |     1 | 3-pin header                                                                      |
| J3            |     1 | Scope probe connector, Specialty Connectors 33JR135-1                             |
| U1            |     1 | Maxim MAX840ISA 8-pin SO                                                          |
| None          |     1 | Shunt                                                                             |
| None          |     1 | Printed circuit board                                                             |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Component Suppliers

| SUPPLIER             | PHONE          | FAX            |
|----------------------|----------------|----------------|
| Matsuo               | (714) 969-2491 | (714) 960-6492 |
| Murata-Erie          | (814) 237-1431 | (814) 238-0490 |
| Sprague              | (603) 224-1961 | (603) 224-1430 |
| Vishay/Vitramon      | (203) 268-6261 | (203) 452-5670 |
| Specialty Connectors | (317) 738-2800 | (317) 738-2858 |

<!-- image -->

Figure 1.  MAX840 EV Kit Schematic Diagram

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX840 Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

The MAX840 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Connect a 2.5V to 10.0V supply to the VIN pad at the top of the board. Connect the ground lead to the adjacent GND pad.
- 2) Connect a voltmeter and the load to the VOUT pad.
- 3) Place the shunt on J1 across pins 1 and 2. This connects the S - H - D - N -pin to VIN.
- 4) Turn on the power and verify that the output is -2V. You can insert a scope probe into J3 to observe the output noise. Be sure the scope ground makes contact with the outside of the connector.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

The 3-pin header, J1, controls pin 4 (S - H - D - N -) on the IC. Table 1 outlines the shunt positions for J1.

## Output Voltage Adjustment

For output voltages other than -2V, cut the trace across J2 to disconnect the FB pin (pin 5) from GND, and install two resistors (R1 and R2) for the output voltage divider. Mounting pads for the resistors are located on the board's solder side. See the MAX840/MAX843/ MAX844 data sheet for instructions on calculating R1 and R2 values.

Figure 2.  MAX840 EV Kit Component Placement GuideComponent Side (not shown to scale)

<!-- image -->

Figure 4.  MAX840 EV Kit PC Board Layout-Component Side (not shown to scale)

<!-- image -->

If using the MAX843 or MAX844 with the MAX840 EV kit, connect VCTRL to a positive voltage to control VOUT.

<!-- formula-not-decoded -->

For example, if R1 = R2, then VOUT = -VCTRL. The maximum  | VOUT | will be at least 0.6V below VIN.

## Table 1.  J1 Shunt Positions

Figure 3.  MAX840 EV Kit Component Placement GuideSolder Side (not shown to scale)

| SHUNT POSITION   | PIN 4 CONNECTION   | MAX840 FUNCTION                                                 |
|------------------|--------------------|-----------------------------------------------------------------|
| 1 & 2            | V IN               | S - H - D - N - high, device enabled                            |
| 2 & 3            | GND                | S - H - D - N - low, device disabled                            |
| Open             | Connected to pad   | Pin 4 is driven by user signal connected to S - H - D - N - pad |

<!-- image -->

Figure 5.  MAX840 EV Kit PC Board Layout-Solder Side (not shown to scale)

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 (408) 737-7600

<!-- image -->