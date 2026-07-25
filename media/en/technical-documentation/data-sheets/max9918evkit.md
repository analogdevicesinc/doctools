<!-- lastmod 2022-08-03 -->
## General Description

The MAX9918 evaluation kit (EV kit) provides a proven design to evaluate the MAX9918 wide input range, precision unidirectional/bidirectional, current-sense amplifier in an 8-pin SO package. The EV kit features Kelvin connections for force and sense at the amplifier inputs and a very precise current-sense resistor with a tolerance of ±0.5%. Various test points are included for additional evaluation.

The MAX9918 EV kit PCB comes with a MAX9918ASA+ installed. Contact the factory for free samples of the pincompatible MAX9919FASA+, MAX9919NASA+, and MAX9920ASA+ to evaluate these devices.

| DESIGNATION   |   QTY | DESCRIPTION                                                     |
|---------------|-------|-----------------------------------------------------------------|
| C1            |     1 | 0.1µF ±10%, 16V X7R ceramic capacitor (0603) TDK C1608X7R1C104K |
| C2            |     1 | 10µF ±20%, 6.3V X5R ceramic capacitor (0805) TDK C2012X5R0J106M |
| JU1           |     1 | 3-pin header                                                    |
| JU2           |     1 | 2-pin header                                                    |
| P1, P2        |     2 | Binding posts                                                   |
| R1            |     1 | 1k Ω ±0.1% resistor (0805)                                      |

<!-- image -->

## Features

- ♦ Wide -20V to +75V Input Range Independent of Supply Voltage
- ♦ Operates Off a Single +5V Supply
- ♦ Unidirectional or Bidirectional Operation
- ♦ Lead(Pb)-Free and RoHS Compliant
- ♦ Proven PCB Layout
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX9918EVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                     |
|---------------|-------|---------------------------------------------------------------------------------|
| R2            |     1 | 88.7k Ω ±0.1% resistor (0805)                                                   |
| R3            |     1 | 0.05 Ω ±0.5%, 0.5W 4-terminal current-sense resistor (1206) Ohmite LVK12R050DER |
| TP1-TP5       |     5 | Red test points                                                                 |
| U1            |     1 | Precision bidirectional current-sense amplifier (8 SO) Maxim MAX9918ASA+        |
| -             |     2 | Shunts                                                                          |
| -             |     1 | PCB: MAX9918 Evaluation Kit+                                                    |

## Component Supplier

| SUPPLIER   | PHONE        | WEBSITE               |
|------------|--------------|-----------------------|
| TDK Corp.  | 847-803-6100 | www.component.tdk.com |

Note:

Indicate that you are using the MAX9918 when contacting this component supplier.

1

## MAX9918 Evaluation Kit

## Quick Start

## Required Equipment

- MAX9918 EV kit
- +5V, 10mA DC power supply
- +14V, 1A DC power supply
- Electronic load or equivalent resistor load
- Two digital voltmeters (DVM1, DVM2)

## Procedure

The MAX9918 EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Verify that the jumpers are in their default position, as shown in Table 1.
- 2) Connect the positive terminal of the +5V supply to VCC and the negative terminal to GND.
- 3) Connect the positive terminal of the +14V supply to P1. Connect P2 into the positive terminal of an electronic load. Connect the negative terminal of the electronic load to the GND terminal on the +14V supply.
- 4) Connect the positive terminal of DVM1 to OUT (TP1) and the negative terminal to the GND pad.
- 5) Connect the positive terminal of DVM2 to RS+ (TP4) and the negative terminal to RS- (TP5).
- 6) Turn on the +5V supply first and then the +14V supply.
- 7) Set the electronic load to 250mA and turn the electronic load on. Observe the output at TP4 with DVM1. The output voltage should be approximately 90 times the voltage read on DVM2. Repeat for load currents of 500mA and 750mA.

## Table 1. Jumper Table (JU1, JU2)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                               |
|----------|------------------|-------------------------------------------------------------------------------------------|
| JU1      | 1-2              | Connects SHDN to VCC (shutdown)                                                           |
| JU1      | 2-3*             | Connects SHDN to GND (normal operation)                                                   |
| JU2      | Open             | REFIN is unconnected and can be connected externally to VCC/2 for bidirectional operation |
| JU2      | Closed*          | Connects REFIN to GND; used for unidirectional operation                                  |

## Additional Evaluation

- 1) Turn off the electronic load, remove the shunt from JU2, and apply +2.5V on REFIN (TP3). This is for bidirectional operation.
- 2) DVM1 should read +2.5V for the no-load case. Set the load to 250mA and observe the output at TP4 with DVM1. The amplified output is added to +2.5V. Set the load to -250mA by swapping the cables connected to P1 and P2. The output voltage is subtracted from +2.5V by the same amount.

## Detailed Description of Hardware

The MAX9918 EV kit provides a proven layout for the MAX9918 current-sense amplifier. The MAX9918 measures the load current and provides an analog output voltage. The full-scale VSENSE on the MAX9918 is 50mV, allowing for 1A max load with a 50m Ω currentsense resistor. Higher load currents can be accommodated by adding a current-sense resistor in parallel with R3. Exposed copper is available for adding another current-sense resistor and vias are also available for a through-hole resistor. RS+ (TP4) and RS- (TP5) are Kelvin connected.

## Measuring the Load Current

The MAX9918 EV kit comes with a MAX9918ASA+ installed,  which  sets  the  gain  externally  through  resistors  R1  and  R2.  The  current-sense resistor is 50m Ω . The output voltage is dependent on the sense current, current-sense resistor, and gain (eq. 1). For the MAX9918 EV kit, the current-sense resistor is 50m Ω and the gain is 89.7, which is set through resistors R1 and R2 (Table 2).

<!-- formula-not-decoded -->

where RSENSE is 50m Ω and AV is 89.7 for the MAX9918 EV kit by default.

## Bidirectional Operation

The MAX9918 EV kit can be configured for bidirectional operation by removing the shunt on JU2 and applying VCC/2 on REFIN (TP3). That sets the bias voltage to VCC/2 for a no-current condition. Current in the positive direction in reference to RS+ and RS- increases the output voltage from VCC/2 and current in the negative direction decreases the output voltage from VCC/2 (eq. 2).

<!-- formula-not-decoded -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Evaluating the MAX9919 and MAX9920

Both versions of the MAX9919 have fixed gains and do not require gain-setting feedback resistors. Remove R1 and R2 to evaluate the MAX9919.

The MAX9920's gain is shown in Table 2. For the same R1 and R2 values, the MAX9920 has a lower gain, which allows a wider input range for a given currentsense resistor.

<!-- image -->

## MAX9918 Evaluation Kit

## Table 2. Gain (AV) Table

| PART     | GAIN (A V )                                     |
|----------|-------------------------------------------------|
| MAX9918  | 1 +       R2 R1                           |
| MAX9919F | 45                                              |
| MAX9919N | 90                                              |
| MAX9920  | 1 4 +                   R2 R1 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9918 Evaluation Kit

Figure 1. MAX9918 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9918 Evaluation Kit

<!-- image -->

Figure 2. MAX9918 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9918 Evaluation Kit

Figure 3. MAX9918 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9918 Evaluation Kit

Figure 4. MAX9918 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

SPRINGER

7