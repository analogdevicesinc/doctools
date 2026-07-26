<!-- lastmod 2022-08-02 -->
## General Description

The MAX1534 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that demonstrates the MAX1534 triple-output keep-alive power supply  IC.  The  MAX1534 integrates one high-performance step-down converter and two low-dropout regulators (LDOs). The step-down converter is configured for 5.0V and provides up to 500mA. The first and second LDOs are configured for 3.3V and 1.8V at currents up to 160mA each. Power management functions include an accurate shutdown input and power-OK (POK) output. The EV kit also allows for adjustable output voltages by including extra pads for feedback resistors.

| DESIGNATION   |   QTY | DESCRIPTION                                                      |
|---------------|-------|------------------------------------------------------------------|
| C1            |     1 | 10µF ±20%, 25V X7R ceramic capacitor (1812) TDK C4532X7R1E106M   |
| C2            |     1 | 47µF ±20%, 6.3V X5R ceramic capacitor (1210) TDK C3225X5R0J476M  |
| C3, C5, C6    |     3 | 2.2µF ±20%, 10V X5R ceramic capacitors (0805) TDK C2012X5R1A225M |
| C4            |     1 | 0.01µF ±20%, 25V X7R ceramic capacitor (0402) TDK C1005X7R1E103M |
| D1            |     1 | 1A, 30V, Schottky diode (SMA) Nihon EP10QY03                     |

<!-- image -->

Features

- ♦ Triple-Output Power Supply

5.0V at 500mA (typ)

3.3V at 160mA

1.8V at 160mA

- ♦ Integrated Power MOSFETs
- ♦ 4.5V to 24V Input Supply Range
- ♦ Adjustable Inductor Current Limit
- ♦ Fixed or Adjustable Outputs
- ♦ Power-OK (POK) Output
- ♦ 3.5µA Shutdown Supply Current (typ)
- ♦ Surface-Mount Construction
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE IC PACKAGE              |
|--------------|------------------------------------|
| MAX1534EVKIT | 0°C to +70°C 16 Thin QFN 4mm × 4mm |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                           |
|---------------|-------|---------------------------------------|
| L1            |     1 | 15µH, 1A inductor Sumida CDRH6D38-150 |
| R1-R6         |     0 | Not installed (0603)                  |
| R7            |     1 | 100k Ω ±5% resistor (0603)            |
| R8, R9        |     0 | Not installed (2010)                  |
| R10, R11      |     0 | Not installed (0805)                  |
| JU1, JU2      |     2 | Jumpers, SIP-3, 3-pin headers (SIP-3) |
| JU3           |     0 | Not installed (SIP-3)                 |
| JU4           |     1 | Jumper, 2 × 3 pin header              |
| U1            |     1 | MAX1534ETE (16-pin thin QFN)          |
| None          |     3 | Shunts                                |
| None          |     1 | MAX1534 PC board                      |

## Component Suppliers

| SUPPLIER   | PHONE         | FAX           | WEBSITE               |
|------------|---------------|---------------|-----------------------|
| Nihon      | 81-33343-3411 | 81-33342-5407 | www.niec.co.jp        |
| Sumida     | 847-545-6700  | 847-545-6720  | www.sumida.com        |
| TDK        | 847-803-6100  | 847-390-4405  | www.component.tdk.com |

Note:

Please indicate that you are using the MAX1534 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX1534 Evaluation Kit

## Quick Start

## Recommended Equipment

- One variable DC power supply capable of supplying between 4.5V and 24V at 1A
- Five voltmeters

## Procedure

The MAX1534 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Do not turn on the power supply until all connections are completed:

- 1) Set the variable DC power supply to any voltage between 4.5V and 24V.
- 2) Ensure that the variable DC power supply is turned off.
- 3) Ensure that shunts are placed across pins 1-2 of jumpers JU1 and JU2.
- 4) Ensure that a shunt is placed across pins 3-4 of jumper JU4.
- 5) Connect a voltmeter across the IN pad and the GND pad (located beside the OUT3 pad) to monitor the input voltage.
- 6) Connect a voltmeter across the OUT1 pad and the GND pad (located beside the OUT1 pad) to monitor the OUT1 voltage (3.3V).
- 7) Connect a voltmeter across the OUT2 pad and the GND pad (located beside the LDOIN pad) to monitor the OUT2 voltage (1.8V).
- 8) Connect a voltmeter across the OUT3 pad and the GND pad (located below the OUT3 pad) to monitor the OUT3 voltage (5.0V).
- 9) Connect a voltmeter across the POK pad and the GND pad (located above the LDOIN pad) to monitor the POK voltage.
- 10) Turn on the variable DC power supply.
- 11) Verify that the voltage at OUT1 is 3.3V.
- 12) Verify that the voltage at OUT2 is 1.8V.
- 13) Verify that the voltage at OUT3 is 5.0V.
- 14) Verify that the voltage at POK is 5.0V.

## Detailed Description

The MAX1534 EV kit provides multiple output voltages (5.0V, 3.3V, and 1.8V) from a 4.5V to 24.0V input. The buck-converter section of the EV kit delivers up to 500mA and operates up to 100% duty cycle. The EV kit utilizes  the  MAX1534 IC, and the circuit regulates the buck converter output voltage to 5.0V without an exter- nal feedback network. The MAX1534 also features two additional internal  LDOs that are set to 1.8V and 3.3V with output currents of 160mA each. The outputs of the buck converter and the LDO regulators can be adjusted by adding feedback resistors R1 through R6. For instructions on adjusting the output voltage, see the Adjusting the Output Voltages section.

The default configuration of the MAX1534 EV kit drives the input to the LDOs with the output of the buck converter (OUT3). If the output of the buck converter (OUT3) is configured lower than the outputs of the LDOs (OUT1 or OUT2), LDOIN must be driven by a separate source (see Using an Alternative LDO Source Supply ).

## Shutdown Control

The MAX1534 has an active-low shutdown control input that  enables/disables all three power outputs. Jumper JU1 selects the circuit operating modes: shutdown or normal operation. Remove the shunt when driving SHDN with an external signal. See Table 1 for shunt positions.

The MAX1534 EV kit can be programmed to shut down

Table 1. Shutdown Selection

| JUMPER   | SHUNT POSITION   | SHDN PIN         | DESCRIPTION                                                                        |
|----------|------------------|------------------|------------------------------------------------------------------------------------|
| JU1      | 1-2*             | Connected to IN  | MAX1534 outputs enabled. POK is high impedance when all outputs are in regulation. |
| JU1      | 2-3              | Connected to GND | MAX1534 outputs disabled. POK is low impedance.                                    |

* Default configuration: JU1 (1-2).

when the input voltage drops below a desired minimum voltage (VIN(MIN)) by installing resistors R10 and R11, and removing the shunt on JU1. Calculate these resistor values using the following equation:

<!-- formula-not-decoded -->

where:

VSHDN = 1.0V

R10 = 100k Ω

VIN(MIN) = desired minimum input voltage

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Adjustable Inductor Current Limit

The MAX1534 EV kit can operate at different current limits.  Jumper JU2 selects the MAX1534's maximum internal switch current limit. The EV kit's default setting allows a maximum 1000mA internal switch current. To change the switch current limit to 500mA, move the shunt on jumper JU2 to pins 2-3. Changing the current limit requires inductor L1 and output capacitor C2 to be replaced. Refer to the Recommended Components table in the MAX1534 data sheet. Remove the shunt when driving ILIM with an external signal. See Table 2 for shunt positions.

## Table 2. Inductor Current-Limit Selection

| JUMPER   | SHUNT POSITION   | ILIM PIN         |   INDUCTOR CURRENT LIMIT (mA) |
|----------|------------------|------------------|-------------------------------|
| JU2      | 1-2*             | Connected to IN  |                          1000 |
| JU2      | 2-3              | Connected to GND |                           500 |

* Default configuration: JU2 (1-2).

## Selecting the POK Active-High Output Voltage

The POK pin of the MAX1534 indicates the status of the output voltages. Monitor this voltage at the POK pad. The POK pin is pulled up with a 100k Ω resistor through jumper JU4 to one of the three outputs. See Table 3 for shunt positions.

Table 3. POK Output Selection

| JUMPER   | SHUNT POSITION   | DESCRIPTION                              |
|----------|------------------|------------------------------------------|
| JU4      | 1-2              | POK pin pulled up to OUT2 (1.8V default) |
| JU4      | 3-4*             | POK pin pulled up to OUT3 (5.0V default) |
| JU4      | 5-6              | POK pin pulled up to OUT1 (3.3V default) |

* Default configuration: JU4 (3-4).

## Adjusting the Output Voltages

The MAX1534 EV kit circuit is configured to regulate the output voltages to preset values by connecting the PRESET pin to ground. The outputs can be adjusted to different  voltages  by  cutting  open  the  PC  board  short

<!-- image -->

## MAX1534 Evaluation Kit

## Table 4. PRESET Shunt Positions

| JUMPER   | SHUNT POSITION   | PRESET PIN       | DESCRIPTION            |
|----------|------------------|------------------|------------------------|
| JU3      | 1-2              | Connected to IN  | Adjustable output mode |
| JU3      | 2-3*             | Connected to GND | Fixed output mode      |

between pins 2-3 of JU3, shorting pins 1-2 of JU3, and installing resistors R1 through R6. Refer to the instructions below for resistor selection. See Table 4 for PRESET shunt positions.

To adjust the output voltages of the MAX1534 EV kit, follow the directions below:

- 1) Cut the trace between pins 2 and 3 of jumper JU3.
- 2) Install a 3-pin header in position JU3.
- 3) Place a shunt across pins 1 and 2 of jumper JU3.
- 4) Cut the trace between the pads of resistor R1, R4, and R6.
- 5) Install  resistors  in  locations  R1  through  R6  (the resistor  values  are  calculated  using  the  following equations).

To set the output voltage on OUT1, choose R3 as follows:

<!-- formula-not-decoded -->

where:

VOUT1 = desired output voltage at OUT1 (from 1V to LDOIN)

VFB1 = 1.00V

R4 = 100k Ω

To set the output voltage on OUT2, choose R5 as follows:

<!-- formula-not-decoded -->

where:

VOUT2 = desired output voltage at OUT2 (from 1V to LDOIN)

VFB2 = 1.00V

R6 = 100k Ω

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1534 Evaluation Kit

Figure 1. MAX1534 EV Kit Schematic

<!-- image -->

To set the output voltage on OUT3, choose R1 as follows:

<!-- formula-not-decoded -->

where:

VOUT3 = desired output voltage at OUT3 (from 1V to IN)

VFB3 = 1.00V

R2 = 100k Ω

Note: If  OUT3 is  set  higher  than  5.5V,  OUT3  must  be disconnected from LDOIN and POK.

The voltage at OUT3 must be at least 240mV higher than the voltages at OUT1 and OUT2. If the voltage at OUT3 is lower than either of the voltages at OUT1 and OUT2, the input to the LDOs must be driven by a separate power source (see Using an Alternative LDO Source Supply section).

Note: Adjustable operation may require replacement of capacitors with higher voltage ratings.

Note: Do not pull up POK above LDOIN.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Using an Alternative LDO Source Supply

The buck-converter output (OUT3) is the default power source for the two LDOs. If the output voltages at either OUT1 or OUT2 are reconfigured for a voltage greater than OUT3, the input to the MAX1534 internal LDOs must be driven by an external source. To drive the LDOs with an external source, follow the directions below:

- 1) Cut the PC board trace shorting the pads of resistor R8.
- 2) Connect an external 0.5A source to the pads marked LDOIN and GND.
- 3) Ensure that the external source is greater than 2.5V, at  least  240mV  higher  than  OUT1  or  OUT2 (whichever is greater), and does not exceed 5.5V.

<!-- image -->

Figure 2. MAX1534 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4. MAX1534 EV Kit PC Board Layout-Solder Side

<!-- image -->

## MAX1534 Evaluation Kit

Figure 3. MAX1534 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 5. MAX1534 EV Kit Component Placement GuideSolder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

5