<!-- lastmod 2022-08-03 -->
## General Description

The DS2710 evaluation kit (EV kit) demonstrates operation of the DS2710 single-cell NiMH charger IC. The kit includes an assembled and tested PCB with a AA-size battery socket for easy connection to USB or other power source and a CD with documentation for the kit and device. The DS2710 EV kit fully charges a single NiMH chemistry cell and then provides a maintenance charge current to counteract self-discharging. Safety features include overvoltage protection, thermal protection,  charge timeout, and alkaline-cell rejection by impedance test. An LED output displays the charging state.

| DESIGNATION   |   QTY | DESCRIPTION                                              |
|---------------|-------|----------------------------------------------------------|
| C1            |     1 | 1µF ceramic capacitor 490-3903-2                         |
| C2, C3        |     2 | 10µF ceramic capacitors C2012X5R1A106M                   |
| D1            |     1 | Green LED diode L62305CT                                 |
| D2            |     1 | 3A/1W Schottky diode B340A-13                            |
| J7            |     1 | USB female connector 609-1039                            |
| L1            |     1 | 15µH SMT inductor Elec & Eltek Magnetics SISCDRH74M-150R |
| Q1            |     1 | pFET ZXM62P02E6CT                                        |
| RT1           |     1 | 10k NTC thermistor 103AT-2                               |
| R1            |     1 | 150 resistor (0603) Digi-Key RHM150GTR                   |

<!-- image -->

## DS2710 Evaluation Kit

Features

- ♦ Convenient Power Source and Load Connections
- ♦ AA-Size NiMH Cell Socket
- ♦ LED Outputs Charging Status
- ♦ Compact PCB Layout
- ♦ Fully Assembled

## Ordering Information

| PART         | TYPE   |
|--------------|--------|
| DS2710EVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                       |
|---------------|-------|---------------------------------------------------|
| R2, R6        |     2 | 1k resistors (0603) Digi-Key RHM1.0KGTR           |
| R3            |     1 | 270k resistor (0603) Digi-Key RHM270KGTR          |
| R4            |     1 | 10k resistor (0603) Digi-Key RHM10KGTR            |
| R5            |     1 | 0 resistor (0603) Digi-Key RHM0.0GTR              |
| R7            |     1 | 100k resistor (0603) Digi-Key RHM100KGTR          |
| R8            |     1 | 47k resistor (0603) Digi-Key RHM47KGTR            |
| R9            |     1 | 0.100 ±1%, 2512 1W P100MCT                        |
| U1            |     1 | Single-cell NiMH charger (10 TDFN) Maxim DS2710G+ |
| -             |     1 | AA battery clip 92K                               |
| -             |     1 | PCB: DS2710 Evaluation Kit+                       |

1

## DS2710 Evaluation Kit

## Connections

Connect a AA-size NiMH cell between the B- and B+ tabs, observing proper polarity. Make sure the battery contacts the exposed thermistor (103AT-2 provided with  the  kit  board).  To  charge  the  cell,  connect  a  5V charge source capable of supplying at least 2.5W at 4V to 5.5V between the CS pad and GND pad or connect directly to a powered USB port through the USB-B female connector. An optional load to the cell should be connected between the LOAD+ and LOAD- pads. The sense resistor is included in the discharge path through the load so the cell can be charged while under load. Figure 1 shows connections to the DS2710 EV kit board.

## Operation

Refer to the DS2710 IC data sheet for a full description of  charge operation. After applying power to the DS2710 EV kit board, the DS2710 waits in presence state  until  a  cell  is  inserted  into  the  AA  socket.  When the DS2710 determines a cell has been inserted, charging begins as shown in Table 1.

Time, temperature, overvoltage, or impedance faults can cause the DS2710 to terminate charge early and enter fault state. Refer to the DS2710 IC data sheet for a full  description of possible faults while charging. While in fault state, the status LED blinks at a 4Hz rate. The DS2710 exits fault state and returns to presence state when the cell is removed from the socket.

Figure 1. Connections to DS2710 EV Kit Evaluation Board

<!-- image -->

## Table 1. Charging

|   ORDER | STATE       | RATE                    | LED STATUS   | NORMAL EXIT                   |
|---------|-------------|-------------------------|--------------|-------------------------------|
|       1 | Precharge   | 1.13A, 25% duty cycle   | 1Hz blink    | Cell voltage > 1.0V           |
|       2 | Fast-Charge | 1.13A, 97% duty cycle   | On           | 2mV - V termination           |
|       3 | Top-Off     | 1.13A, 25% duty cycle   | On           | Timeout based on TMR resistor |
|       4 | Maintenance | 1.13A, 1.56% duty cycle | Off          | Cell removed from socket      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## DS2710 Evaluation Kit

<!-- image -->

Figure 2. NiMH Charge Cycle

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## DS2710 Evaluation Kit

Figure 3 shows the switching waveform for the DS2710 while actively charging the cell. The CS output pin toggles rail-to-rail to regulate the voltage across the sense resistor to 0.113V. This example uses a 15µH coil to create a switching frequency of approximately 110kHz to 150kHz during charge, depending on supply voltage.

Figure 3. Switching Waveform

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Description of Hardware

Figure 4 shows the DS2710 EV kit schematic.

## Inductor Selection

Proper selection of the output inductor achieves a target output ripple current for a given set of input and output voltages and output current load. Trade-offs between package size and losses that affect overall efficiency are other considerations for selecting a particular  inductor  model. The inductor selected for the DS2710 EV kit is SISCDRH74M-150RC from Elec &amp; Eltek Magnetics. The inductance value is 15µH, which results in a switching frequency of approximately 120kHz for this evaluation board.

## PCB Layout

The DS2710 EV kit is built on a two-layer board with 1oz copper. The artwork for the two component and two signal layers is shown in Figure 5. The loop formed by C2, D2, and Q1 is the most crucial part of the PCB layout. The loop area is kept as small as possible to minimize switching noise.

An additional battery tab land pattern is included to allow the AA-size battery tabs to be replaced with AAAsize battery tabs if desired.

## Adjusting Charging Characteristics

## Charge-Rate Adjustment

The charge rate is determined by the external sense resistor connected between the VN1 and VN0 pins (R9). The DS2710 regulates the charge current to maintain a voltage drop of 113mV typical across the sense resistor during fast-charge. The charge rate can therefore be selected by:

<!-- image -->

## DS2710 Evaluation Kit

R9 = 113mV/Desired Fast-Charge Current

The default evaluation board sense resistor value is 0.100 Ω ,  giving  a  charge  rate  of  approximately  1.13A during fast-charge. Note that the limiting factor for maximum charge current on the DS2710 EV kit board is the 15µH coil, which is rated to 1.4A maximum sustained current.

## Charge Time and Top-Off Time Adjustment

Charge time and top-off time are controlled by the external resistor from the TMR pin to VSS (R7). Resistors can be selected to support fast-charge timeout  periods of  0.5hr  to  5hr  and  top-off  charge  timeout periods of 0.25hr to 2.5hr. The programmed charge time approximately follows the equation:

t = 1.5 x RTMR ( Ω )/1000 (time in minutes)

The default evaluation board value for R7 is 100k Ω , giving a charge timeout of approximately 150min.

Impedance Test-Threshold Adjustment The charge rate must be determined before the impedance threshold can be set. The resistor from the CTEST pin to VSS (R8) sets the voltage-level threshold used to prohibit charging of non-NiMH cells using the following formula:

Impedance Threshold (m Ω ) = (8000/(RCTEST ( Ω ) x Charge Rate (A))

The default evaluation board value for R8 is 47k Ω , which sets the impedance threshold at approximately 150m Ω at  a  1.13A  charge  rate.  The  resistance  of  the cell tabs must be considered when setting the impedance threshold level.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## DS2710 Evaluation Kit

Figure 4. DS2710 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## DS2710 Evaluation Kit

<!-- image -->

Figure 5. DS2710 EV Kit PCB Layout

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## DS2710 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                             | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------------------------------------------------------|-----------------|
|                 0 | 12/08           | Initial release.                                                                        | -               |
|                 1 | 8/09            | Changed the part number from DS2710K to DS2710EVKIT+ in the Ordering Information table. | 1               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8