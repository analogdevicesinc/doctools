<!-- lastmod 2022-08-03 -->
## General Description

The MAX8814 evaluation kit (EV kit) is a fully assembled and tested printed-circuit board (PCB) for evaluating the MAX8814 28V linear Li+ battery charger. The MAX8814 EV kit operates from an input supply range of 4.25V to 28V, but the IC disables charging if the input voltage exceeds 7V to protect against unqualified or faulty  AC  adapters. The MAX8814 EV kit features an adjustable fast-charge current set by an external resistor  (R2).  Other  features  include  an  active-low  control input ( EN ) and an active-low input power source detection output ( POK ). The IC also features a booting assistant circuit that distinguishes input sources and battery connection and provides an output signal (ABO) for system booting.

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX8814EVKIT+ | EV Kit |

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                                    |
|---------------|-------|--------------------------------------------------------------------------------------------------------------------------------|
| C1            |     1 | 1µF ±10%, 35V X5R ceramic capacitor (0603) Taiyo Yuden GMK107BJ105K                                                            |
| C2, C4        |     0 | Not installed, 0.1µF ±10%, 10V X5R ceramic capacitors (0402) TDK C1005X5R1A104K Taiyo Yuden LMK105BJ104K Murata GRM155R61A104K |
| C3            |     1 | 2.2µF ±10%, 10V X5R ceramic capacitor (0603) Taiyo Yuden LMK107BJ225K Murata GRM188R61A225K                                    |

<!-- image -->

## Features

- ♦ CCCV, Thermally Regulated Linear 1-Cell Li+ Battery Charger
- ♦ No External MOSFET, Reverse Blocking Diode, or Current-Sense Resistor
- ♦ Programmable Fast-Charge Current (1ARMS max)
- ♦ Proprietary Die Temperature Regulation Control (+115°C)
- ♦ 4.25V to 28V Input Voltage Range with Input OVP Above 7V
- ♦ Charge-Current Monitor for Fuel Gauging (ISET)
- ♦ Low Dropout Voltage (300mV at 500mA)
- ♦ Input Power-Source Detection Output ( POK ) and Charge-Enable Input ( EN )
- ♦ Soft-Start Limits Inrush Current
- ♦ Output for Autobooting (ABO)
- ♦ Fully Assembled and Tested

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                            |
|---------------|-------|----------------------------------------------------------------------------------------|
| JU1           |     1 | 2-pin header, 0.1in center Sullins PEC36SAAN Digi-Key S1012E-36-ND                     |
| R1, R4        |     0 | Not installed, 10k Ω ±5% resistors-PCB short (0402), lead free                         |
| R2            |     1 | 2.8k Ω ±1% resistor (0402), lead free                                                  |
| R3            |     1 | 1M Ω ±5% resistor (0402), lead free                                                    |
| U1            |     1 | 28V linear lit battery charger (8-pin, TDFN,2mmx2mm) Maxim MAX8814ETA+ (Top Mark: ABI) |
| -             |     1 | PCB: MAX8814 Evaluation Kit+                                                           |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                             |
|----------------------------------------|--------------|-------------------------------------|
| Digi-Key Corp.                         | 800-344-4539 | www.digikey.com                     |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com         |
| Sullins Electronics Corp.              | 760-744-0125 | www.sullinselectronics.com/tek9.asp |
| Taiyo Yuden                            | 408-573-4150 | www.t-yuden.com                     |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com               |
| Vishay                                 | 402-563-6866 | www.vishay.com                      |

Note: Indicate that you are using the MAX8814 when contacting these component suppliers.

## MAX8814 Evaluation Kit

## Quick Start

## Recommended Equipment

Before beginning, the following equipment is needed:

- 28V power supply (PS1) capable of 1A
- 5V power supply (PS2) capable of 100mA
- Four digital multimeters (DMM1-DMM4)
- One 10A ammeter
- A single-cell lithium-ion (Li+) battery (not fully charged)

## Procedure

The MAX8814 EV kit is a fully assembled and tested surface-mount PCB. Follow the steps below and see Figure 1 to set up and verify board operation. Caution: Do not turn on power supplies until all connections are made.

- 1) Preset the power supply (PS1) to 5V. Turn off the power supply. Do not turn on the power supply until all connections are made.
- 2) Preset the power supply (PS2) to 5V. Turn off the power supply. Do not turn on the power supply until all connections are made.
- 3) Verify that a shunt is installed on JU1 ( EN ) to set the EV kit in disable mode.
- 4) Connect the positive lead of the power supply (PS1) to the EV kit pad labeled IN. Connect the negative lead of the power supply to the EV kit pad labeled GND.
- 5) Connect the positive lead of the power supply (PS2) to the EV kit pad labeled VI/O. Connect the negative lead of the power supply to the EV kit pad labeled GND. Do not connect the PS2 positive lead to ABI until instructed.
- 6) Observe correct Li+ cell polarity. Connect a singlecell Li+ cell and 10A ammeter, as shown in Figure 1. The positive lead of the ammeter must connect to BATT+ and the negative lead to the positive terminal of the Li+ battery.
- 7) Connect a digital multimeter (DMM1) across the Li+  battery.  Note  the  battery  voltage.  If  the VBATT &lt; 2.5V, the charger starts in precharge mode. If VBATT ≥ 2.5V, the charger starts up in fastcharge mode.
- 8) Connect a digital multimeter (DMM2) from POK to GND.
- 9) Connect a digital multimeter (DMM3) from ABO to GND.
- 10) Connect a digital multimeter (DMM4) from ISET to GND.
- 11) Turn on PS1 and then turn on PS2.
- 12) Remove the shunt on JU1 to put the EV kit in enable mode.
- 13) If the charger is in fast-charge mode, verify that the ammeter reads approximately 570mA. If the charger  is  in  precharge  mode,  verify  that  the  ammeter reads 57mA.
- 14) If the charger is in fast-charge mode, verify that the voltage read at DMM4 is 1.4V. If the charger is in precharge mode, verify that the voltage read at DMM4 is 0.14V.
- 15) Verify that the voltage read by DMM2 is 0V, indicating POK is low.
- 16) Verify that the voltage read by DMM3 is approximately the same voltage read by DMM1.
- 17) When the battery is fully charged, DMM1 reads 4.2V.
- 18) Turn off the input power supply (PS1).
- 19) Verify that the voltage read by DMM2 is near 5V and the voltage read by DMM3 is 0V.
- 20) Connect ABI to the positive terminal of PS2.
- 21) Verify that the voltage read at DMM3 is approximately the same voltage read by DMM1.

When evaluation of the MAX8814 EV kit is completed, use the following steps to power down the EV kit:

- 1) Install a shunt on JU1.
- 2) Turn off all power supplies.
- 3) Remove the battery.
- 4) Disconnect all test leads from the EV kit.

## Table 1. Jumper Settings

| JUMPER   | FUNCTION                                                                                                                                                                |
|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JU1      | Shorts EN (active-low enable input) to VI/O (system supply). Short JU1 to disable the IC. EN has an internal pulldown resistor to GND. Leave JU1 open to enable the IC. |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8814 Evaluation Kit

Figure 1. Test Procedure Setup for MAX8814 EV Kit

<!-- image -->

## Detailed Description

The MAX8814 charger uses voltage, current, and thermal-control loops to charge a single Li+ cell and protect the battery (Figure 1). When an Li+ battery with a cell  voltage below 2.5V is inserted, the MAX8814 charger enters the prequalification stage where it precharges that cell with 10% of the user-programmed fast-charge current. When battery voltage reaches 2.5V, the charger soft-starts as it enters the fast-charge stage. In the MAX8814, the fast-charge current level is programmed through a resistor from ISET to GND. As the battery voltage approaches 4.2V, the charging current is reduced. Once the battery voltage reaches 4.2V, the IC then enters a constant voltage regulation mode to maintain the battery at full charge.

## Thermal Regulation

The thermal-regulation loop limits the MAX8814 die temperature to +115°C by reducing the charge current as necessary. This feature not only protects the IC from overheating, but also allows a higher charge current without risking damage to the IC.

<!-- image -->

## Charger Enable Input

The MAX8814 contains an active-low logic input ( EN ) used to enable the charger. Drive EN low, leave unconnected, or connect to GND to enable the charge-control circuitry.  Drive EN high to disable the charge-control circuitry. EN has an internal 200k Ω pulldown resistor.

## POK Output

The open-drain POK output asserts low when VIN ≥ 4.25V and (VIN - VBATT) ≥ 40mV (typ VIN rising). POK requires an external pullup resistor (1M Ω typ)  to  an external power supply (R3 in Figure 2). POK is  high impedance when VBATT ≥ (VIN - 40mV).

## Autobooting Assistant

The MAX8814 contains an autobooting assistant circuit that  generates an enable signal for system booting (ABO). The booting assistant functions as an internal 'OR' gate (refer to Figure 1 in  the  MAX8814 IC data sheet for details). The first  input  is  dependent  on  the state of the internal POK signal and the second input is an external signal applied to ABI.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8814 Evaluation Kit

The second input signal (ABI) is driven by an external source (Table 2). ABI enables an autoboot signal (ABO high) when a battery is connected at BATT and is independent of POK .  If POK is  low,  the  booting  assistant always drives ABO high regardless of ABI. ABI is pulled to GND through an internal 200k Ω resistor. If ABI is driven externally, an RC filter (R1 and C2 in Figure 2) is  required  for  ESD  protection  and  noise  filtering.  To install R1, cut the copper trace across the R1 pads. If ABI is supplied by a system's internal GPIO, or logic, the RC filter is not required.

## Table 2. ABO and POK States

X = Don't care.

| ABI   | BATT        | POK    | CHARGER STATE                  | ABO   |
|-------|-------------|--------|--------------------------------|-------|
| Low   | Present     | High-Z | Shutdown                       | Low   |
| High  | Present     | High-Z | Shutdown                       | High  |
| X     | Not present | Low    | Fast-charge/voltage regulation | High  |
| X     | Present     | Low    | Fast-charge/voltage regulation | High  |

## Charge-Current Selection

The maximum charging current is programmed by an external resistor connected from ISET to GND (RISET, R2 in Figure 2). Calculate RISET as follows:

<!-- formula-not-decoded -->

where IFAST-CHARGE is in amperes and RISET is in ohms. ISET can be used to monitor the charge-current level.  The  output current from ISET is 877.2µA per ampere of charging current. The output voltage at ISET is proportional to the charging current:

<!-- formula-not-decoded -->

The voltage at ISET is nominally 1.4V at the selected fast-charge current, and falls with charging current as the cell becomes fully charged or as the thermalregulation circuitry activates.

## DC Input Sources

The MAX8814 operates from a well-regulated DC source. The full charging input voltage range is 4.25V to 7V. The device can withstand up to 28V on the input without damage to the IC. If VIN is greater than 7V, the internal overvoltage-protection circuitry disables charging until the input falls below 7V. An appropriate power supply must provide at least 4.25V at the desired peak charging current.

Figure 2. MAX8814 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX8814 Evaluation Kit

Figure 3. MAX8814 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8814 Evaluation Kit

Figure 4. MAX8814 EV Kit PCB Layout-Component Side

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8814 Evaluation Kit

Figure 5. MAX8814 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

7