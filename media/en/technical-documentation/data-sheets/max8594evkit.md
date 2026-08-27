<!-- lastmod 2022-08-02 -->
## General Description

The MAX8594 evaluation kit (EV kit) is a fully assembled and tested circuit board that evaluates the MAX8594 5output PMIC with DC-DC core supply for low-cost PDAs. The MAX8594 COR1 4MHz step-down DC-DC converter supplies a pin-selectable 1V or 1.3V output at 250mA. A MAIN LDO supplies 3.3V at 500mA. A secure-digital (SD) card-slot output supplies 3.3V at 500mA, and a COR2 LDO supplies 1.8V at 50mA. Each output has its own logic-controlled enable. An LCD bias boost DC-DC converter features an on-board MOSFET and True Shutdown™ when off and has its own logiccontrolled enable. A µP reset output clears 20ms (typ) after the COR1 output achieves regulation to ensure an orderly start. Included on the MAX8594, and available on the EV kit, are low-battery and dead-battery monitors.  The  MAX8594 EV kit operates from a 3.1V to a 5.5V supply.

| DESIGNATION    |   QTY | DESCRIPTION                                                       |
|----------------|-------|-------------------------------------------------------------------|
| C1             |     1 | 1µF ±20%, 6.3V X5R ceramic capacitor (0402) TDK C1005X5R0J105M    |
| C2, C3, C5, C7 |     4 | 4.7µF ±10%, 6.3V X5R ceramic capacitors (0603) TDK C1608X5R0J475K |
| C4, C6         |     2 | 2.2µF ±10%, 6.3V X5R ceramic capacitors (0603) TDK C1608X5R0J225K |
| C8             |     1 | 1µF ±10%, 25V X7R ceramic capacitor (1206) TDK C3216X7R1E105K     |
| C9             |     1 | 47pF ±10%, 50V C0G ceramic capacitor (0402) TDK C1005C0G1H470JT   |
| C10            |     1 | 0.1µF ±10%, 10V X5R ceramic capacitor (0402) TDK C1005X5R1A104K   |

True Shutdown is a trademark of Maxim Integrated Products, Inc.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Features

- ♦ Minimum External Components
- ♦ Efficient Step-Down DC-DC Powers CPU Core
- ♦ 1V/1.3V Selectable Core Voltage, 250mA
- ♦ Main LDO 3.3V, 500mA
- ♦ SD Card Output 3.3V, 500mA
- ♦ Second Core LDO 1.8V, 50mA
- ♦ High-Efficiency LCD Boost
- ♦ LCD 0V True Shutdown when Off
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE            |
|--------------|--------------|-----------------------|
| MAX8594EVKIT | 0°C to +70°C | 24 Thin QFN 4mm x 4mm |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                          |
|---------------|-------|--------------------------------------------------------------------------------------|
| D1            |     1 | 30V, 0.5A switching diode (SOD-123) International Rectifier MBR0530 (top mark IR530) |
| JU1-JU6       |     6 | 3-pin headers                                                                        |
| L1            |     1 | 10µH inductor (1210) Murata LQH32CN100K21                                            |
| L2            |     1 | 2.2µH inductor (1210) Murata LQH32CN2R2M53                                           |
| R1            |     1 | 2.2M Ω ±1% resistor (0402)                                                           |
| R2            |     1 | 200k Ω ±1% resistor (0402)                                                           |
| R3            |     0 | Open (0402)                                                                          |
| R4, R5        |     2 | Not installed, PC board shorts (0402)                                                |
| R6, R7, R8    |     3 | 1M Ω ±1% resistors (0402)                                                            |
| U1            |     1 | MAX8594ETG                                                                           |
| None          |     6 | Shunts                                                                               |

Maxim Integrated Products

1

## MAX8594 Evaluation Kit

## Quick Start

## Recommended Equipment

- One variable-DC power supply capable of supplying up to 5.5V at 2A
- Digital multimeter (DMM)
- Ammeter (optional)
- Various loads (optional)

## Procedure

The MAX8594 EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Preset the variable-DC power supply to 4V. Turn off the power supply. Do not turn on the power supply until all connections are complete .
- 2) Connect the positive lead of the 4V power supply to the BATT pad on the EV kit and connect the negative lead of the power supply to the GND pad on the EV kit.
- 3) To enable the MAIN output, verify that JU1 has a shunt connected to the ON position.
- 4) Verify that JU2, JU3, JU4, and JU6 have shunts connected to their OFF positions.
- 5) Turn on the power supply.
- 6) Use a voltmeter to verify the MAIN voltage (3.3V) by connecting the positive lead of the DMM to the MAIN pad on the EV kit and connecting the negative lead of the DMM to the GND pad on the EV kit.
- 7) Connect a load, if desired, from MAIN to GND. See Table 1 for maximum load currents.

## Table 2. JU1-JU4 and JU6 Jumper Functions

| JUMPER (LABEL)   | OUTPUT   | ON SETTING (V)   | OFF SETTING   |
|------------------|----------|------------------|---------------|
| JU1 (ENM)        | MAIN     | 3.3*             | 0V/OFF        |
| JU2 (ENSD)       | SDIG     | 3.3              | 0V/OFF*       |
| JU3 (ENC1)       | COR1     | 1 or 1.3         | 0V/OFF*       |
| JU4 (ENC2)       | COR2     | 1.8              | 0V/OFF*       |
| JU6 (ENLCD)      | LCD      | 15 (Note 1)      | 0V/OFF*       |

*Default position

Note 1: The EV kit is preset to 15V. The LCD output has a maximum-allowable voltage of 28V. If the EV kit is used to evaluate voltages above 15V, ensure that C8, C9, and D1 are capable of handling the higher voltage.

## Table 3. JU5 Jumper Function

| JUMPER (LABEL)   | OUTPUT                        | 1V SETTING   | 1.3V SETTING   |
|------------------|-------------------------------|--------------|----------------|
| JU5 (CV)         | COR1 Output Voltage Selection | 1V           | 1.3V*          |

*Default position

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- 8) To verify other outputs, move the shunt on the respective jumpers to the ON position and use a voltmeter to verify output voltages.
- 9) Connect loads from outputs COR1, COR2, and SDIG to GND, if desired. See Table 1 for maximum load currents.

## Detailed Description

The MAX8594 EV kit provides one step-down DC-DC converter with 250mA output current capability and pinselectable 1V or 1.3V output. Also included are three LDO outputs of 3.3V at MAIN, 3.3V at SDIG, 1.8V at COR2, and one adjustable boost LCD output set at 15V. Table 1 lists output voltages and maximum currents. The EV kit incorporates jumpers JU1, JU2, JU3, JU4, and JU6 to enable or disable MAIN, SDIG, COR1, COR2, and LCD, respectively, and JU5 to select COR1 output voltage. Tables 2 and 3 list the jumper functions.

## Table 1. Output Voltages and Maximum Currents

| OUTPUT   | VOLTAGE (V)   |   MAXIMUM CURRENT (mA) |
|----------|---------------|------------------------|
| MAIN     | 3.3           |                    500 |
| SDIG     | 3.3           |                    500 |
| COR1     | 1 or 1.3      |                    250 |
| COR2     | 1.8           |                     50 |
| LCD      | 15 (Note 1)   |                      5 |

Note 1: The EV kit is preset to 15V. The LCD output has a maximum-allowable voltage of 28V. If the EV kit is used to evaluate voltages above 15V, ensure that C8, C9, and D1 are capable of handling the higher voltage.

<!-- image -->

## Evaluating Other Boost Voltages

The MAX8594 EV kit can be used to evaluate up to 28V at the boost output. The EV kit default boost output voltage is set to 15V. To generate other output voltages, replace feedback resistors R1 and R2. Select R2 in the 10k Ω to 200k Ω range.

<!-- formula-not-decoded -->

where VLFB = 1.25V and VOUT can range from VIN to 28V. The input bias current of LFB is typically only 5nA, allowing large-value resistors to be used. For less than 1% error, the current through R2 should be greater than 100 times the feedback input bias current (ILFB).

## Evaluating Other LBI and DBI Monitor Voltages

The DBI and LBI inputs monitor input voltage (usually a battery) and trigger the DBO and LBO outputs. With LBI and DBI connected to IN (default EV kit configuration), the LBI and DBI thresholds are internally set. For a rising input voltage, DBO goes high when VIN exceeds 3.3V and LBO goes high when VIN exceeds 3.7V. For a falling input voltage, LBO goes low when VIN falls below 3.3V and DBO goes low when VIN falls below 3.0V (refer also to the Electrical  Characteristics table in the MAX8594 data sheet). Alternatively, the LBI and DBI thresholds can be set with external resistors R3, R4, and R5. R4 and R5 are shorted with a trace on

## MAX8594 Evaluation Kit

the board and must be cut before resistors are placed on the footprint. R3, R4, and R5 create one three-resistor-divider that can set both DBI and LBI according to the following equations (shown for setting falling thresholds). Choose the lower resistor of the divider chain (R3 in  Figure  1)  to  be  between  100k Ω and 250k Ω .  The equations for the two upper divider-resistors as a function of each (falling) threshold are then:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

where VDBFALL and VLBFALL are the desired falling thresholds to trigger the DBO and LBO outputs, respectively. Once those thresholds are selected, the rising DBI and LBI thresholds are then:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

## Component Suppliers

| SUPPLIER                | COMPONENT   | PHONE        | WEBSITE               |
|-------------------------|-------------|--------------|-----------------------|
| International Rectifier | Diode       | 800-341-0392 | www.irf.com           |
| Murata                  | Inductors   | 814-237-1431 | www.murata.com        |
| TDK                     | Capacitors  | 888-835-6646 | www.component.tdk.com |
| Vishay                  | Resistors   | 402-563-6866 | www.vishay.com        |

Note: Indicate that you are using the MAX8594 EV kit when contacting these component suppliers.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8594 Evaluation Kit

Figure 1. MAX8594 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 2. MAX8594 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX8594 Evaluation Kit

Figure 3. MAX8594 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX8594 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ 5