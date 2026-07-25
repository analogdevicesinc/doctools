<!-- lastmod 2022-08-05 -->
<!-- image -->

## General Description

The MAX1757/MAX1758 evaluation kits (EV kits) are assembled and tested PC boards that implement a step-down, switching lithium-ion (Li+) battery charger. The MAX1757 EV kit can be set to charge 1- to 3-series cells, and the MAX1758 EV kit can be set to charge 1to  4-series  cells.  The  cell  voltage  can  be  set  between 4.0V and 4.4V using standard 1% resistors while maintaining  1% overall regulation voltage accuracy. Three LEDs indicate the charging status.

The MAX1757/MAX1758 EV kits detect faulty cells and terminate charging. Two capacitors are used to set the charge termination, prequalification, and fault timeout periods. A user-supplied thermistor may be connected to either EV kit to monitor battery temperature and suspend charging for over-/undertemperature conditions.

| DESIGNATION                   |   QTY | DESCRIPTION                                                                                        |
|-------------------------------|-------|----------------------------------------------------------------------------------------------------|
| C1, C2, C3, C7, C14, C17, C18 |     7 | 0.1 µ F, 50V X7R ceramic capacitors (0805) Murata GRM40-034X7R104K050 or Taiyo Yuden UMK212BJ104KG |
| C4                            |     1 | 1 µ F, 10V X7R ceramic capacitor Taiyo Yuden LMK212BJ105MG or Murata GRM40X7R105K10                |
| C5, C6, C19                   |     3 | 1000pF, 50V X7R ceramic capacitors                                                                 |
| C8, C9                        |     2 | 0.1 µ F, 50V X7R ceramic capacitors (1206)                                                         |
| C10, C11                      |     2 | 22 µ F, 35V, 0.300 Ω , low-ESR tantalum capacitors AVX TPSE226M035R0300 or Kemet T495X226M035AS    |
| C12                           |     1 | 0.22 µ F, 50V X7R ceramic capacitor Taiyo Yuden UMK316BJ224ML                                      |
| C13                           |     1 | 4.7 µ F, 10V X5R ceramic capacitor Taiyo Yuden LMK316BJ475ML or Murata GRM42-6X5R475K10            |
| C15                           |     1 | 68 µ F, 20V, 0.150 Ω , low-ESR tantalum capacitor AVX TPSE686M020R0150                             |

## Features

- ♦ Complete Li+ Charging Solution up to 3-Series Cells (MAX1757) and 4-Series Cells (MAX1758)
- ♦ 1.5A Battery-Charging Current
- ♦ Low Heat/High Efficiency
- ♦ 300kHz PWM Operation
- ♦ Up to 14V Input Voltage Range (MAX1757)
- ♦ Up to 28V Input Voltage Range (MAX1758)
- ♦ 28-Pin SSOP Package
- ♦ Surface-Mount Construction
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | IC PACKAGE   |
|---------------|--------------|
| MAX1757 EVKIT | 28 SSOP      |
| MAX1758 EVKIT | 28 SSOP      |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                  |
|---------------|-------|--------------------------------------------------------------------------------------------------------------|
| D1, D3        |     2 | Diodes, 1N4148-type Fairchild MMSD4148, Vishay Liteon/Diodes, Inc. 1N4148W, or General Semiconductor 1N4148W |
| D2, D4        |     2 | Schottky diodes, 3A, 30V Nihon EC31QS03L or Vishay Liteon/Diodes, Inc. B330A                                 |
| JU1           |     1 | 2-pin header                                                                                                 |
| JU2           |     1 | 3-pin header                                                                                                 |
| JU3           |     1 | 3-pin header (MAX1757 EV kit) 4-pin header (MAX1758 EV kit)                                                  |
| L1            |     1 | 22 µ H, 2.5A inductor Sumida CDRH104R-220NC                                                                  |
| LED1, LED2    |     2 | Light-emitting diodes (green), T1                                                                            |
| LED3          |     1 | Light-emitting diode (red), T1                                                                               |
| R1            |     1 | 0.05 Ω ± 1%, 0.5W sense resistor Dale WSL-2010-R050F or IRC LRC-LR2010-01-R050-F                             |
| R2, R12       |     2 | 10k Ω ± 5% resistors                                                                                         |
| R3-R6         |     0 | Not installed                                                                                                |
| R7, R8        |     2 | 100k Ω ± 1% resistors                                                                                        |
| R9, R10, R11  |     3 | 1k Ω ± 5% resistors                                                                                          |
| R13, R14      |     2 | 4.7 Ω ± 5% resistors                                                                                         |
| U1            |       | MAX1757EAI (MAX1757 EV kit)                                                                                  |
| U1            |     1 | MAX1758EAI (MAX1758 EV kit)                                                                                  |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

For price, delivery, and to place orders, please contact Maxim Distribution at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX1757/MAX1758 Evaluation Kits

## Quick Start

The MAX1757/MAX1758 EV kits are fully assembled and tested surface-mount boards. Follow the steps below to verify board operation. Do not turn on the power supply until all connections are completed. Observe all precautions on the battery manufacturer's data sheet. Use only lithium-ion (Li+) cells with this charger:

- 1) Set jumper JU3 to indicate the number of cells in the battery pack (Table 1).
- 2) Place a shunt on jumper JU1 to disable the temperature monitoring functions.
- 3) Place a shunt across pins 1-2 on JU2 to enable the MAX1757 or MAX1758.
- 4) For the MAX1757, connect a +7VDC to +14VDC power supply with sufficient power rating across the VIN and GND pads.

For the MAX1758, connect a +7VDC to +28VDC power supply with sufficient power rating across the VIN and GND pads.

- 5) Connect a lithium-ion (Li+) battery pack between the BATT+ and BATT- pads.
- 6) Turn on the power supply.
- 7) Verify that LEDs 1, 2, and 3 indicate the correct charging status.

## Detailed Description

When battery charging is initiated, the charger enters the prequalification state. In this state, the batteries are charged at 1/10 of the programmed current limit while the charger measures the battery to determine if it can be charged. If the battery voltage is above 2.5V per cell,  charging begins. At this time, the batteries are charged at a constant current (fast-charge state) or a constant voltage (full-charge state). The charger exits the  full-charge  state  and  enters  the  top-off  state  once the battery current drops to 10% of the fast-charge current,  or  the  fast-charge  timer  expires.  The charger remains in the top-off state for 45 minutes, after which charging is terminated.

Once charging is terminated, if the battery voltage drops 5% from the fully charged voltage, charging automatically restarts.

If  at  any  time  during  charging,  the  thermistor  input senses a temperature below 0°C or above +50°C, charging suspends until the temperature returns to a safe level.  This  kit  is  shipped  with  a  10k Ω resistor  to disable the temperature monitoring function.  If temperature monitoring is required, connect the appropriate

## Input Current

The input current limit is set by sense resistor R1 and by the voltage applied to the ISETIN pin. This sets the i nput  current  limit  to  2A  (100mV/50m Ω ).  The MAX1757/MAX1758 EV kits are shipped with ISETIN connected to REF and a 50m Ω sense resistor.

To change the input current limit to a lower value, cut the trace shorting the two pads of R5 and install resistors for R5 and R6. Use the equations below to calculate the resistor values:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

Use 100k Ω for R6.

To further increase the input current limit, reduce the value of sense resistor R1.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

thermistor (see Jumper Selection section).

If the charger is unable to enter the fast-charge or fullcharge states, charging is terminated and the fault LED (red) lights to indicate a faulty battery.

For more information on the operation of the MAX1757 or MAX1758, refer to the Detailed Description sections of the MAX1757 and MAX1758 data sheets.

## Charging Status

The three LEDs on the EV kit indicate the charging status:

- ♦ LED1 (FULL) indicates that the battery pack is being charged with a constant voltage.
- ♦ LED2 (FAST) indicates that the battery pack is being charged with a constant current.
- ♦ LED3 (FAULT) indicates that charging terminated abnormally.

## Charging Current

The voltage at the ISETOUT pin sets the charging current to the battery. The MAX1757/MAX1758 EV kits are shipped with ISETOUT connected to REF. This sets the charging current to the full-scale value of 1.5A.

To change the charging current to a lower value, cut the trace shorting the two pads of R3 and install resistors for R3 and R4. Use the equations below to calculate the resistor values:

<!-- formula-not-decoded -->

Use 100k Ω for R4.

## MAX1757/MAX1758 Evaluation Kits

Table 1. Jumper Selection

| JUMPER   | JUMPER POSITION   | FUNCTION                                                    |
|----------|-------------------|-------------------------------------------------------------|
| JU1      | Open              | Open before connecting a thermistor from THERM to GND pads. |
| JU1      | Closed*           | Bypasses THERM with a 10k Ω resistor.                       |
| JU2      | 1-2*              | SHDN = high. MAX1757/MAX1758 enabled.                       |
| JU2      | 2-3               | SHDN = low. MAX1757/MAX1758 disabled.                       |
| JU2      | Open              | Drive SHDN pad with an external signal.                     |
| JU3      | 1-2*              | CELL = GND. Cell count = 1.                                 |
| JU3      | 1-3               | CELL = VL. Cell count = 4. (MAX1758 only)                   |
| JU3      | 1-4               | CELL = REF. Cell count = 3.                                 |
| JU3      | Open              | CELL = Float. Cell count = 2.                               |

## Component Suppliers

| SUPPLIER                          | PHONE        | FAX          |
|-----------------------------------|--------------|--------------|
| AVX                               | 803-946-0690 | 803-626-3123 |
| BC Components                     | 803-772-2500 |              |
| Dale-Vishay                       | 402-564-3131 | 402-563-6418 |
| Fairchild                         | 408-822-2000 | 408-822-2102 |
| General Semiconductor             | 631-847-3000 | 631-847-3236 |
| International Resistive Co. (IRC) | 310-322-3331 | 310-322-3332 |
| Kemet                             | 408-986-0424 | 408-986-1442 |
| Murata                            | 814-237-1431 | 814-238-0490 |
| Nihon                             | 661-867-2555 | 661-867-2698 |
| Sumida                            | 847-956-0666 | 847-956-0702 |
| Taiyo Yuden                       | 408-573-4150 | 408-573-4159 |
| Vishay Liteon/Diodes, Inc.        | 805-446-4800 | 805-446-4850 |

Note: Please indicate that you are using the MAX1757 or MAX1758 when contacting these manufacturers.

The EV kits can be placed in shutdown mode using jumper JU2. (See Table 1 for jumper settings.)

Jumper JU3 selects the number of series cells to be charged. (See Table 1 for jumper settings.)

## Jumper Selection

Jumper JU1 connects the thermistor input (THERM) to GND through a 10k Ω resistor,  disabling  temperature qualification. To enable temperature qualification (charging between 0°C and +50°C), remove the shunt from JU1 and connect a thermistor (BC Components part # 2322-640-63103 or equivalent) to the THERM and GND pads. For more information, refer to the MAX1757 and MAX1758 data sheets.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1757/MAX1758 Evaluation Kits

Figure 1. MAX1757/MAX1758 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1757/MAX1758 Evaluation Kits

<!-- image -->

Figure 2. MAX1757/MAX1758 EV Kit Component Placement Guide-Component Side

Figure 3. MAX1757/MAX1758 EV Kit PC Board LayoutComponent Side

<!-- image -->

Figure 4. MAX1757/MAX1758 EV Kit PC Board LayoutSolder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.