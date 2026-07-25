<!-- lastmod 2022-08-02 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX756 evaluation kit (EV kit) is a fully assembled and tested surface-mount printed circuit board.  It can also be modified to fit the adjustable-output MAX757. The MAX756/MAX757 are CMOS, step-up, DC-DC switching regulators for small, low input voltage or battery-powered systems.  The MAX756 accepts a positive input voltage down to 0.7V and converts it to a higher pin-selectable output voltage of 3.3V or 5V.  The MAX757 is an adjustable version that accepts an input voltage down to 0.7V and generates a higher adjustable output voltage in the 2.7V to 5.5V range.  Typical fullload efficiencies for the MAX756/MAX757 are greater than 87%.

A movable jumper selects either 3.3V or 5.0V output voltage, and additional pads on the bottom of the board are provided to place resistors for the LBI/LBO low-battery detector and MAX757 output adjustment.

EV Kit

<!-- image -->

## MAX756 Evaluation Kit

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ' Operates Down to 0.7V Input Supply Voltage
- ' 87% Efficiency at 200mA
- ' 60µA Quiescent Current
- ' 20µA Shutdown Mode with Active Reference and LBI Detector
- ' 500kHz Maximum Switching Frequency
- ' ±1.5% Reference Tolerance Over Temperature
- ' Low-Battery Detector (LBI/LBO)
- ' 8-Pin DIP and SO Packages
- ' Surface-Mount Construction
- ' Fully Assembled and Tested

\_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART           | TEMP. RANGE   | BOARD TYPE    |
|----------------|---------------|---------------|
| MAX756EVKIT-SO | 0°C to +70°C  | Surface Mount |

## Quick Reference

The MAX756 EV kit is a fully assembled and tested surface-mount board.  Follow these steps to verify board operation.

## Do not turn on the power supply until all connections are completed.

1. Connect a 1.8V to 5.5V supply to the pad marked VIN.  The ground connects to the GND pad.
2. Connect a voltmeter and load (if any) to the VOUT pad.
3. Place the shunt on J1 across pins 1 and 2.
4. Place the shunt on J2 across pins 1 and 2 for a 5V output voltage.  If a 3.3V output is desired, the shunt goes across pins 2 and 3, and the input voltage must be less than 3.6V.
5. Turn on the power and verify that the output voltage is 5V.
6. Refer to the section Using the MAX757 to modify the board for different output voltages.

1

## MAX756 Evaluation Kit

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION        |   QTY | DESCRIPTION                                                                                                                                |
|--------------------|-------|--------------------------------------------------------------------------------------------------------------------------------------------|
| C1                 |     1 | 0.1µF, 50V ceramic capacitor                                                                                                               |
| C2, C3             |     2 | 100µF, 10V, low-ESR tantalum capacitors; Sprague 595D107X0010D7                                                                            |
| R1, R2, R3, R4, R5 |     0 | Open                                                                                                                                       |
| L1                 |     1 | 22µH power inductor; Sumida CD54-220, CoilCraft DT3316-223, Coiltronix CTX-20, Murata Erie LQH4N150K0M00 (lower-current 30mA applications) |
| D1                 |     1 | 1A, 20V Schottky diode (1N5817) Nihon EC15QS02L, Motorola MBRS130T3 Collmer SE014, SE024                                                   |
| U1                 |     1 | MAX756CSA (8-pin SO)                                                                                                                       |
| None               |     2 | 3-pin headers                                                                                                                              |
| None               |     2 | Shunts                                                                                                                                     |
| None               |     1 | 2.00" x 2.00" PC board                                                                                                                     |
| None               |     1 | MAX756 data sheet                                                                                                                          |

Refer to MAX756/MAX757 data sheet for component suppliers' phone numbers.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

## Input Source

The input source for the MAX756 evaluation board must be greater than 1.8V for guaranteed start-up (0.7V for  operation  once started), and less than the output voltage plus 0.5V.  A typical input voltage range would be the 2.0V to 3.3V range of a 2-cell NiCd battery.  An input voltage greater than the selected output voltage (but  less  than  7V)  will  not  damage  the  circuit. However, the MAX756 output will equal the input voltage minus the 0.3V drop of the Schottky diode, D1.

The input current depends on the power delivered to the load.  The following equations show how to calculate the expected input current requirement.

```
Input Power = Output Power / Efficiency and
```

Input Current = Input Power / Input Voltage

To calculate the input current for a typical operating circuit, assume a 2.5V input voltage, a 5V output voltage,

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

and a 100mA load.  The expected efficiency can be taken from the graphs on the MAX756 data sheet. Under the above conditions, the MAX756 delivers 85% efficiency.

```
Input Power = (5.0V x 100mA) / 85% Input Power = 588mW and Input Current = 588mW / 2.5V Input Current = 235mA
```

Once started, the MAX756 actually operates at 10mA output from the regulated output voltage.  This means that the input voltage can fall below the 1.8V minimum guaranteed start-up voltage.  Typically, the regulated output will be maintained even if the input voltage drops to 0.7V.

## Jumper Selection

Two 3-pin headers select the shutdown mode andoutput voltage.  Table 1 lists the selectable jumper options.

## Using the Low-Battery Indicator

The MAX756 has an additional comparator useful for monitoring the input source's voltage level. Resistor locations R3 and R4 on the bottom of the printed circuit board are connected as a voltage divider between the LBI pad and the MAX756 LBI pin.  Note that a printed circuit  board trace across R4 shorts the LBI pin to ground when this function is not used.  Cut the trace before installing R4.  Refer to the Low-Battery Detection section of the MAX756/MAX757 data sheet for instructions on selecting values for resistors R3 and R4.

## Table 1.  Jumper Selection

| J1 Shunt Location   | J2 Shunt Location   | SHDN Pin Connection   | 3V/ Pin Connection   | MAX756 Output   |
|---------------------|---------------------|-----------------------|----------------------|-----------------|
| 1 & 2               | 1 & 2               | VOUT                  | GND                  | 5.0V            |
| 1 & 2               | 2 & 3               | VOUT                  | VOUT                 | 3.3V            |
| 2 & 3               | 1 & 2               | GND                   | GND                  | VIN -0.3V       |
| 2 & 3               | 2 & 3               | GND                   | VOUT                 | VIN -0.3V       |

<!-- image -->

Another location on the board facilitates the addition of a pull-up resistor on the LBO output.  The LBO output is  an  open-drain output that can sink 2mA, but will source only 1µA.  Install resistor R5 if an external circuit is to be driven from LBO.

## Inductor Selection

The 22 m H Sumida CD54-220 inductor that comes standard with the EV kit is a low-resistance, medium current  inductor.    It  will  provide  excellent  performance over the line and load ranges of the MAX756/MAX757. A smaller 22 m H Sumida inductor (CD43-220) can also be used in most applications.  For ultra-smalll, lower-current applications, the 15 m H Murata Erie LQH4N150K0M00 inductor is a good choice.  Its dimensions are 3.2 x 4.5 x 3.6mm, and it can be used for outputs in the 30mA range.  Efficiency will typically be greater than 80% using this inductor.

## MAX756 Evaluation Kit

## Using the MAX757

The MAX756 can be replaced with a MAX757 to generate output voltages in the 2.7V to 5.5V range using external resistors.    Besides  replacing  the  IC,  the  only other modification required is to remove the shunt on J2 and add the output voltage-divider resistors R1 and R2 (located on the bottom of the board).  The Output Voltage Selection section of the MAX756/MAX757 data sheet gives instructions for calculating R1 and R2 values.

<!-- image -->

Figure 1.  MAX756 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

3

## MAX756 Evaluation Kit

<!-- image -->

Figure 2.  MAX756 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4.  MAX756 EV Kit Component-Side Layout

Figure 3.  MAX756 EV Kit Component Placement GuideSolder Side

<!-- image -->

Figure 5.  MAX756 EV Kit Solder-Side Layout

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 (408) 737-7600

- © 1995 Maxim Integrated Products