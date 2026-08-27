<!-- lastmod 2022-08-02 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX850-MAX853 ICs are inverting, charge-pump DC-DC converters with low-noise, regulated outputs. Their low output ripple voltage makes these devices ideal for biasing the GaAs FETs commonly found in cellular telephone transmitters.

The MAX850 evaluation kit (EV kit) is a fully assembled and tested surface-mount board.  The board is shipped with a MAX850 mounted, but it can be replaced by the MAX851, MAX852, or MAX853.  Provisions are made for  mounting two additional resistors, which are required for output voltages other than -4.1V.  A special scope-probe socket is also mounted on the board, so output noise can be observed on an oscilloscope.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ♦ 4.5V to 10V Input Range
- ♦ -4.1V Regulated Output
- ♦ Less than 2mVp-p Output Voltage Ripple
- ♦ 5mA Output Current
- ♦ Surface-Mount Technology

Figure 1.  MAX850 EV Kit Schematic Diagram

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

<!-- image -->

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                 |
|---------------|-------|-------------------------------------------------------------|
| C1, C2, C3    |     3 | 1µF, 25V low-ESR tantalum capacitors, Matsuo 267E 2502 105K |
| C4            |     1 | 10µF, 16V low-ESR tantalum capacitor, Matsuo 267E 1602 106K |
| R1, R2        |     0 | Open                                                        |
| J1            |     1 | 3-pin header                                                |
| J3            |     1 | Scope probe connector, Specialty Connectors 33JR135-1       |
| U1            |     1 | Maxim MAX850ISA 8-pin SO                                    |
| None          |     1 | Shunt                                                       |
| None          |     1 | 2.50" x 1.75" printed circuit board                         |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART           | TEMP. RANGE   | BOARD TYPE    |
|----------------|---------------|---------------|
| MAX850EVKIT-SO | 0˚C to +70˚C  | Surface Mount |

1

## MAX850 Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

The MAX850 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Connect a 4.5V to 10.0V supply to the VIN pad at the  top  of  the  board.    Connect  the  ground  lead  to the adjacent GND pad.
- 2) Connect a voltmeter and the load to the VOUT pad.
- 3) Place the shunt on J1 across pins 1 and 2.  This connects the S - H - D - N -pin to VIN.
- 4) Turn on the power and verify that the output is -4.1V.  You can insert a scope probe into J3 to observe the output noise.  Be sure the scope ground makes contact with the outside of the connector.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

The 3-pin header, J1, controls pin 4 on the IC.  Pin 4's function depends on the IC mounted on the board.  On the MAX850/MAX853, pin 4 is a S - H - D - N -pin (disabled when connected to GND). For the MAX851, the device is  disabled when pin 4 is connected to VIN.  On the MAX852, pin 4 is an input pin for an external oscillator. Table 1 outlines the shunt positions for J1.

Table 1.  J1 Shunt Positions

| SHUNT POSITION   | PIN 4 CONNECTION   | MAX850 FUNCTION                                          |
|------------------|--------------------|----------------------------------------------------------|
| 1 & 2            | V IN               | S - H - D - N - high, device enabled                     |
| 2 & 3            | GND                | S - H - D - N - low, device disabled                     |
| Open             | Connected to pad   | Pin 4 is driven by user signal connected to SHDN/OSC pad |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

For output voltages other than -4.1V, cut the trace across J2 that disconnects FB from GND, and install two resistors (R1 and R2) for the output voltage divider. Mounting pads for the resistors are located on the board's solder side.  Cutting the trace across the location marked J2 disconnects the pin from ground.  See the MAX850-MAX853 data sheet for instructions on calculating R1 and R2 values.

For the MAX850, MAX851, and MAX852, connect VCTRL to GND.  For the MAX853, connect VCTRL to a positive voltage to control VOUT.  For example, if R1 = R2, then VOUT = -VCTRL, assuming VCTRL is at least 1V below VIN.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Component Suppliers

| SUPPLIER             | PHONE          | FAX            |
|----------------------|----------------|----------------|
| Matsuo               | (714) 969-2491 | (714) 960-6492 |
| Specialty Connectors | (317) 738-2800 | (317) 738-2858 |

<!-- image -->

Figure 2.  MAX850 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4.  MAX850 EV Kit PC Board Layout-Component Side

<!-- image -->

## MAX850 Evaluation Kit

Figure 3.  MAX850 EV Kit Component Placement GuideSolder Side

<!-- image -->

Figure 5.  MAX850 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 (408) 737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ 3