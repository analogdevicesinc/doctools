<!-- lastmod 2022-08-02 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX856 evaluation kit (EV kit) is a fully assembled and tested surface-mount printed circuit board.  It can also evaluate the MAX858 or the adjustable-output MAX857/MAX859.

The MAX856-MAX859 are CMOS, step-up, DC-DC switching regulators for small, low input voltage or battery-powered systems.  The MAX856/MAX858 accept a positive input voltage between 0.8V and 6V and convert it  to  a  higher,  pin-selectable  output  voltage  of  3.3V  or 5V.  The MAX857/MAX859 adjustable versions accept 0.8V to 6V input voltages and generate a higher, adjustable output voltage in the 2.7V to 6V range. Typical full-load efficiencies for the MAX856-MAX859 are greater than 85%.

A movable jumper on the EV kit selects either a 3.3V or 5.0V output voltage. Additional pads on the board's solder side accommodate resistors for the LBI/LBO low-battery detector  or  MAX857/MAX859  output  adjustment.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION        |   QTY | DESCRIPTION                                                    |
|--------------------|-------|----------------------------------------------------------------|
| C1                 |     1 | 0.1µF ceramic capacitor                                        |
| C2, C3             |     2 | 68µF, 10V, low-ESR tantalum capacitors; Sprague 595D686X0010D7 |
| R1, R2, R3, R4, R5 |     0 | Open                                                           |
| L1                 |     1 | 47µH power inductor; Coilcraft D01608-473 or Sumida CD43-470   |
| D1                 |     1 | 20V, 500mA Schottky diode; Motorola MBRS0530                   |
| U1                 |     1 | MAX856CUA (8-pin µMAX)                                         |
| None               |     2 | 3-pin headers                                                  |
| None               |     2 | Shunts                                                         |
| None               |     1 | 2.00" x 2.00" PC board                                         |
| None               |     1 | MAX856 data sheet                                              |

To  contact  Sprague,  phone  (603)  224-1961  or  fax (603) 224-1430.  To contact Murata Erie, phone (404) 436-1300. Refer to MAX856-MAX859 data sheet for other component suppliers' phone numbers.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ' Low 0.8V to 6V Input Supply Voltage
- ' New µMAX Package
- ' 85% Efficiency at 100mA
- ' 25µA Quiescent Current
- ' 1µA Shutdown Mode
- ' 125mA and 500mA Switch Current Limits Permit Use of Low-Cost Inductors
- ' Up to 500kHz Switching Frequency
- ' ±1.5% Reference Tolerance Over Temperature
- ' Low-Battery Detector (LBI/LBO)
- ' Surface-Mount Construction
- ' Fully Assembled and Tested

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART           | TEMP. RANGE   | BOARD TYPE    |
|----------------|---------------|---------------|
| MAX856EVKIT-MM | 0°C to +70°C  | Surface Mount |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

The MAX856 EV kit is a fully assembled and tested surface-mount board.  Follow the steps below to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Connect a 1.8V to 4.5V supply to the pad marked VIN.  The ground connects to the GND pad.
- 2) Connect a voltmeter and load (if any) to the VOUT pad.
- 3) Place the shunt on J1 across pins 1 and 2.
- 4) Place the shunt on J2 across pins 1 and 2 for a 5V output voltage.  If a 3.3V output is desired, the shunt goes across pins 2 and 3, and the input voltage must be less than 3.6V.
- 5) Turn on the power and verify that the output voltage is 5V.
- 6) Refer to the section Evaluating the MAX857, MAX858, MAX859 to modify the board for different output voltages.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products 1

Call toll free 1-800-998-8800 for free samples or literature.

## MAX856 Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

## Input Source

The input source for the MAX856 evaluation board must be greater than 1.8V for start-up (0.8V for operation  once started), and less than the output voltage plus 0.3V.  A typical input voltage range would be the 2.0V to 3.3V range of a 2-cell NiCd battery.  An input voltage greater than the selected output voltage (but less than 7V) will not damage the circuit.  However, the MAX856 output will equal the input voltage minus the 0.3V drop of the Schottky diode, D1.

The input current depends on the power delivered to the load.  The following equations show how to calculate the expected input current requirement.

```
Input Power = Output Power / Efficiency and Input Current = Input Power / Input Voltage
```

To calculate the input current for a typical operating circuit, assume a 3.3V input voltage, a 5V output voltage, and a 50mA load.  The expected efficiency can be taken from the graphs on the MAX856-MAX859 data sheet.  Under the above conditions, the MAX856 delivers 85% efficiency.

```
Input Power = (5.0V x 50mA) / 85% Input Power = 294mW and Input Current = 294mW / 3.3V
```

Input Current = 89mA

Once started, the MAX856 actually operates from the regulated output voltage.  This means that the input voltage can fall below the 1.8V minimum start-up voltage.  Typically, the regulated output will be maintained even if the input voltage drops to 0.8V.

2

## Jumper Selection

Two 3-pin headers select the shutdown mode and output voltage.  Table 1 lists the selectable jumper options.

## Table 1.  Jumper Selection

| J1 Shunt Location   | J2 Shunt Location   | Pin Connection   | 3V/ Pin Connection   | MAX856 Output   |
|---------------------|---------------------|------------------|----------------------|-----------------|
| 1 & 2               | 1 & 2               | VOUT             | GND                  | 5.0V            |
| 1 & 2               | 2 & 3               | VOUT             | VOUT                 | 3.3V            |
| 2 & 3               | 1 & 2               | GND              | GND                  | VIN - 0.3V      |
| 2 & 3               | 2 & 3               | GND              | VOUT                 | VIN - 0.3V      |

## Using the Low-Battery Indicator

The MAX856 has an additional comparator useful for monitoring the input source's voltage level. Resistor locations R3 and R4 on the bottom of the printed circuit board are connected as a voltage divider between the LBI pad and the MAX856 LBI pin.  Note that a printed circuit  board trace across R4 shorts the LBI pin to ground when this function is not used.  Cut the trace before installing R4.  Refer to the Low-Battery Detection section of the MAX856-MAX859 data sheet for instructions on selecting values for resistors R3 and R4.

Another location on the board facilitates the addition of a pull-up resistor on the LBO output.  LBO is an opendrain output that can sink 2mA.  Install resistor R5 if an external circuit is to be driven from LBO.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Notes About Inductor Selection

The difference between the MAX756/MAX757 and MAX856-MAX859 is the inductor peak current limit. The MAX856-MAX859 have lower limits, allowing the use of physically smaller (and less expensive) inductors. However, efficiency suffers if the inductor's DC series resistance (DCR) increases significantly. To reduce the ripple current for low output current configurations, increase the inductor value. Inductor values between 22µH and 47µH typically have low DCR (good efficiency) and acceptable peak currents.

The MAX856 data sheet shows operating efficiency graphs with a wide range of inductors. Inductors with low DCR and high current capabilities deliver efficiencies greater than 80%. Physically smaller inductors of the same value can have efficiencies below 80% because of their higher DCR.

## MAX856 Evaluation Kit

Evaluating the MAX857, MAX858, MAX859 The MAX856 EV kit can also evaluate the MAX857, MAX858, or MAX859. The MAX858 can be substituted directly for the MAX856.

The MAX857 or MAX859 can be used to generate output voltages in the 2.7V to 5.5V range using external resistors.  Besides replacing the IC, the only other modification required is to remove the shunt on J2 and add the output voltage-divider resistors R1 and R2 (located on the board's solder side).  The Output Voltage Selection section of the MAX856-MAX859 data sheet gives instructions for calculating R1 and R2 values.

<!-- image -->

Figure 1.  MAX856 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

3

## MAX856 Evaluation Kit

<!-- image -->

Figure 2.  MAX856 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4.  MAX856 EV Kit PC Board Layout-Component Side

Figure 3.  MAX856 EV Kit Component Placement GuideSolder Side

<!-- image -->

Figure 5.  MAX856 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 (408) 737-7600