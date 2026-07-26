<!-- lastmod 2022-08-05 -->
## General Description

The MAX1873 evaluation kit (EV kit) is a complete, fully assembled and tested PC board that is capable of supplying power to a system load while charging a lithiumion (Li+) or nickel (Ni)-based battery pack. The EV kit is preset to limit the total source current and the maximum battery-charging current to 3A, and to charge 4-series Li+ cells up to 4.2V each. An analog output voltage proportional to the charging current also permits an ADC or microcontroller to monitor the charging current. The EV kit requires a power source with a minimum output of 18.5V.

The EV kit can be reconfigured to limit the total input current drawn from the power source, the maximum battery-charging current, and the charging cell voltage. The Li+ cell voltage can be set between 4.009V and 4.387V using standard 1% resistors. To charge Li+ battery packs with two or three cells, replace the IC on the EV kit board with one of the ICs listed on the Parts Selection Table .

## Part Selection Table

| PART        |   LITHIUM-ION CELLS TO CHARGE | Ni CELLS TO CHARGE   | INPUT VOLTAGE RANGE   |
|-------------|-------------------------------|----------------------|-----------------------|
| MAX1873REEE |                             2 | 5, 6                 | 9.5V to 28V           |
| MAX1873SEEE |                             3 | 7, 8, 9              | 14.0V to 28V          |
| MAX1873TEEE |                             4 | 10                   | 18.5V to 28V          |

| DESIGNATION   |   QTY | DESCRIPTION                                                                                     |
|---------------|-------|-------------------------------------------------------------------------------------------------|
| C1            |     1 | 2.2µF ±20%, 10V X5R ceramic capacitor (0805) Taiyo Yuden LMK212BJ225MG or TDK C2012X5R1A225KT   |
| C2, C3        |     2 | 0.22µF ±10%, 35V X7R ceramic capacitors (0805) Taiyo Yuden GMK212BJ224KG or TDK C2012X7R1H224KT |
| C4, C5        |     2 | 0.047µF ±10%, 50V X7R ceramic capacitors (0805) Taiyo Yuden UMK212BJ473KG                       |

- ♦ Input-Current Source Limiting
- ♦ Charges 4 Lithium-Ion Batteries
- ♦ Also Charges Ni-Based Batteries
- ♦ Up to 28V Input
- ♦ 300kHz PWM Operation
- ♦ 16-Pin QSOP Package
- ♦ Surface-Mount Construction
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP. RANGE      | IC PACKAGE   |
|--------------|------------------|--------------|
| MAX1873EVKIT | 0 ° C to +70 ° C | 16 QSOP      |

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          |
|-------------|--------------|--------------|
| AVX         | 843-448-9411 | 843-448-1943 |
| Fairchild   | 888-522-5372 | 972-910-8036 |
| IRC         | 361-992-7900 | 361-992-3377 |
| Murata      | 770-436-1300 | 770-436-3030 |
| Sumida      | 847-545-6700 | 847-545-6720 |
| Taiyo Yuden | 800-348-2496 | 847-925-0899 |
| TDK         | 847-803-6100 | 847-390-6296 |

Note: Please indicate you are using the MAX1873 when contacting these manufacturers.

## Component List

| DESIGNATION          |   QTY | DESCRIPTION                                                                                |
|----------------------|-------|--------------------------------------------------------------------------------------------|
| C6, C7, C8, C14, C15 |     5 | 0.1µF, 50V, X7R ceramic capacitors (0805) Taiyo Yuden UMK212BJ104KG or TDK C2012X7R1H104KT |
| C9, C10              |     2 | 22µF ±10%, 35V low-ESR tantalum capacitors (E) AVX TPSE226K035R0200                        |
| C11                  |     1 | 68µF ±20%, 25V low-ESR tantalum capacitor (E) AVX TPSE686M025R0125                         |
| C12                  |     0 | Not installed, capacitors (E)                                                              |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

<!-- image -->

## Features

## MAX1873 Evaluation Kit

| DESIGNATION   |   QTY | DESCRIPTION                                                                                  |
|---------------|-------|----------------------------------------------------------------------------------------------|
| C13           |     1 | 1000pF ±10%, 50V ceramic capacitor (0603) TDK C1608X7R1H102KT or Murata GRM188R71H102KA01    |
| C16           |     1 | 1µF ±10%, 10V, X7R ceramic capacitor (0805) Taiyo Yuden LMK212BJ105KG or TDK C2012X7R1A105KT |
| D1, D2        |     2 | 3A Schottky diodes (SMC) Fairchild MBRS340                                                   |
| L1            |     1 | 10µH, 3A inductor Sumida CDH115-100                                                          |
| P1            |     1 | 30V, 7.9A, P-channel MOSFET (SO-8) Fairchild NDS8435A                                        |

## Quick Start

The MAX1873 EV kit is a fully assembled and tested surface-mount board. Follow the steps below to verify board operation. Do not turn on the power supply until all connections are completed and confirm that the battery is a 4-cell in-series Li+ battery .

- 1) Verify  that  a  shunt  is  not  across  jumper  JU1  (EN). Shunting JU1 to ground disables the charger.
- 2) Place a voltmeter across the BATT+ and GND terminals of the EV kit.
- 3) Place a voltmeter across the IOUT and AGND terminals of the EV kit.
- 4) Connect a 19V to 28V, 4A power supply across VIN and GND.
- 5) Turn on the power supply.
- 6) Verify  that  the  no-load  voltage  across  BATT+ and GND is approximately 16.8V.
- 7) Observe correct Li+ cell polarity . Connect the four Li+ battery cells (in series) across the BATT+ and GND terminals of the EV Kit.
- 8) Monitor the BATT+ voltage until it reaches 16.8V ±0.75%.

## Detailed Description

The MAX1873 EV kit can supply power to a system load while charging a lithium-ion (Li+) or nickel (Ni)-based

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                              |
|---------------|-------|----------------------------------------------------------|
| R1            |     1 | 0.033 Ω ±1%, 1W resistor (2010) IRC LRC-LR2010-01-R033-F |
| R2            |     1 | 0.068 Ω ±1%, 1W resistor (2010) IRC LRC-LR2010-01-R068-F |
| R3, R4        |     2 | 100k Ω ±1% resistors (0805)                              |
| R5, R8        |     2 | 10k Ω ±5% resistors (0805)                               |
| R6, R7        |     2 | 4.7 Ω ±1% resistors (0603)                               |
| R9, R10, R11  |     0 | Not installed, resistors (0805)                          |
| U1            |     1 | MAX1873TEEE (16-PIN QSOP)                                |
| JU1           |     1 | 2-pin header                                             |
| None          |     1 | Shunt                                                    |
| None          |     1 | MAX1873 PC board                                         |
| None          |     1 | MAX1873 data sheet                                       |
| None          |     1 | MAX1873 EV kit data sheet                                |

battery pack without exceeding the AC adapter current limits. Charging is achieved with an external P-channel MOSFET operated in a step-down DC-DC configuration.  An  analog output voltage proportional to the charging current is available at the IOUT pad so that an ADC or microcontroller can also monitor the charging current. As configured for 4-cell Li+ charging, the EV kit requires a power source that can supply a voltage of 18.5V to 28V and a current of 3A.

The EV kit is preset to limit the total source current and the maximum charging current to 3A, and to charge 4series Li+ cells to 4.2V per cell. The user can reset these current limits by replacing the current-sense resistors R1 and R2 on the EV kit board or by adjusting the  input  voltage  at  the  ICHG/EN  pin  with  an  external voltage supply at the ICHG/EN pad. The cell-charging voltage can be set between 4.009V and 4.387V using standard 1% resistors. The user can easily reconfigure the EV kit board to provide a regulated current to charge 10-cell Ni-based battery packs. To charge Li+ or  Ni-based battery packs with a different number of cells, replace the IC on the EV kit board with one of the ICs listed on the Parts Selection Table .

## Input Source

The MAX1873 EV kit requires a power supply that can source 3A, or the peak system current load if greater than 3A, with a voltage range of 18.5V to 28V. This voltage range is required for the MAX1873EEET, which comes installed on the EV kit board. The minimum input

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

voltage can be decreased if the MAX1873TEEE i s replaced with the  MAX1873REEE  or  the MAX1873SEEE. Refer to the Parts Selection Table at the beginning of this document for their respective input voltage ranges.

Note: If  the system load is greater than 3A, verify that the  input  source  is  rated  accordingly  and  replace  D1 with a higher-current-rated diode.

## Current Limits

The MAX1873 EV kit features input-source current limiting and maximum-charge current limiting. When the sum of the charge current and the load current exceed the input current limit, the charging current is reduced. The EV kit's source-current limit and charging-current limit is preset to 3A with current-sense resistors R1 and R2. As the system-load current increases, the remaining  current  is  made  available  for  charging.  If  the  system-load current is greater than 3A, the EV kit will stop charging the battery pack. The user can modify the current limits by replacing R1 and R2 with resistors that will  meet  the  respective  voltage  drop  specification  for proper current regulation. Refer to the Input Current Regulator and Setting the Charging Current Limit sections in the MAX1873 data sheet to modify R1 and R2 components and the current limits.

Note : If the EV kit is modified for current limits higher than 3A, verify that D1, D2, and P1 are rated accordingly.

## Charging Lithium-Ion Cells

The MAX1873 EV kit is preset to charge 4-series Li+ cells to 4.2V each. The cell voltage can be set between 4.009V and 4.387V by replacing resistors R3 and R4 with other standard 1% resistors. To charge two or three Li+ cell packs, replace the MAX1873TEEE (U1) with the MAX1873REEE or the MAX1873SEEE, respectively.  Refer  to  the Voltage Regulator section in the MAX1873 data sheet for instructions on how to select new resistors for a different charging voltage.

Note: The cell-battery termination voltage is a function of  the  battery  chemistry  and  construction.  Consult  the battery manufacturer to determine this voltage.

## Charging Nickel Cells

The MAX1873 EV kit is preset to charge Li+ cells but can be reconfigured to supply current to charge 10cell,  Ni-based battery packs. Refer to the Charging NiMH and NiCd Cells section in the MAX1873 data sheet for more information.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1873 Evaluation Kit

## Control Input/Output

The MAX1873 EV kit features output (IOUT) and input (ICHG/EN) PC board pads that allow the user to monitor  and set the battery-charging current, as well as to enable and disable the charger. The IOUT PC board pad is an analog output voltage supply that is proportional  to  the  charging  current.  The  voltage  at  IOUT  is 4.0V (±0.4V) during maximum charge current. Use a microcontroller or an ADC to detect this voltage. Refer to  the Electric Characteristics table in the MAX1873 data sheet for more information about the IOUT pin.

The ICHG/EN pin can also be used to set the charge current or to disable the charger. To disable the charger, place a shunt across jumper JU1 or set the voltage at  the  ICHG/EN PC board pad below 500mV. The charger is automatically enabled when the shunt is removed from jumper JU1, because it is pulled up to VREF through resistor R8 (10k Ω ).  Refer  to  Table  1  for JU1 configurations. To set the charge current at the ICHG/EN pin, replace the voltage-divider resistors R8 and R9 so that the input voltage is set between 700mV and VREF. An external op amp or DAC with the required output can also be connected at the ICHG/EN PC board pad to set the charging current or disable the charger.

## Output Capacitor Selection

The output capacitor can be reduced in size and value, depending upon the charger being used. For the MAX1873R use a 68µF capacitor, for the MAX1873S use a 47µF capacitor, and for the MAX1873T use a 33µF capacitor. Use a capacitor with ESR &lt; 1 Ω . Refer to the MAX1873 data sheet for more information.

Table 1.  Jumper JU1 Functions

| SHUNT POSITION   | ICHG/EN PIN      | EV KIT FUNCTION     |
|------------------|------------------|---------------------|
| Installed        | Connected to GND | Charger in shutdown |
| None             | Pulled to VREF   | Normal operation    |

Figure 1.  MAX1873 EV Kit Schematic 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 2.  MAX1873 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4.  MAX1873 EV Kit PC Board Layout-Solder Side

<!-- image -->

## MAX1873 Evaluation Kit

Figure 3.  MAX1873 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 5.  MAX1873 EV Kit Component Placement GuideSolder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

5