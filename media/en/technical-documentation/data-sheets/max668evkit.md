<!-- lastmod 2022-08-02 -->
## General Description

The MAX668 evaluation kit (EV kit) combines a constant-frequency, pulse-width-modulation (PWM) stepup controller with an external N-channel MOSFET and Schottky diode to provide a regulated output voltage. The EV kit accepts a +3V to VOUT input and converts it to a +12V output for currents up to 1A, with greater than 90% conversion efficiency. The EV kit operates at 500kHz, allowing the use of small external components.

The MAX668 EV kit is a fully assembled and tested surface-mount circuit board. This EV kit can also be configured for the application circuits listed in the EV Kit Application Circuit Capabilities table. For input voltages below 3V and down to 1.8V, replace the MAX668 with a MAX669. The MAX669 must always operate in bootstrapped mode (JU2 shunt across pins 1 and 2).

## Ordering Information

| PART        | TEMP. RANGE   | IC PACKAGE   |
|-------------|---------------|--------------|
| MAX668EVKIT | 0°C to +70°C  | 10 µMAX      |

Note: To evaluate the MAX669, request a MAX669EUB free sample with the MAX668EVKIT.

## EV Kit Application Circuit Capabilities

|   V IN(MIN) (V) |   V OUT (V) |   I OUT (A) |
|-----------------|-------------|-------------|
|             1.8 |          12 |         0.4 |
|             1.8 |          24 |         0.1 |
|             2.5 |          12 |        0.65 |
|               3 |           5 |           3 |
|               3 |          12 |           1 |
|               3 |          36 |        0.02 |
|              12 |          24 |         0.5 |

Note: Design information for these applications is included. The shaded row shows EV kit configuration as shipped.

<!-- image -->

Features

- ' +3V to VOUT Input Range (as shipped)
- ' +12V or Adjustable Output Voltage
- ' Output Current Up to 1A
- ' N-Channel External MOSFET
- ' 4µA IC Shutdown Current
- ' 500kHz Switching Frequency
- ' Surface-Mount Components
- ' Fully Assembled and Tested

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                        |
|---------------|-------|----------------------------------------------------------------------------------------------------|
| C1            |     1 | 68µF, 20V, low-ESR tantalum cap Sprague 593D686X0020E2W or AVX TPSE686M020R0150                    |
| C5            |     1 | 120µF, 20V, low-ESR tantalum cap Sprague 594D127X0020R2T                                           |
| C2            |     1 | 0.1µF ceramic capacitor                                                                            |
| C3            |     1 | 0.22µF ceramic capacitor                                                                           |
| C4, C8        |     2 | 1µF ceramic capacitors                                                                             |
| C7            |     1 | 220pF ceramic capacitor                                                                            |
| C6            |     0 | Not installed                                                                                      |
| D1            |     1 | 3A Schottky diode Hitachi HRF302A or Motorola MBRS340T3                                            |
| L1            |     1 | 4.7µH power inductor Sumida CDRH104-4R7 (shielded), Coiltronics UP2B-4R7, or Coilcraft DO3316P-472 |
| N1            |     1 | N-channel MOSFET Fairchild FDS6680 or International Rectifier IRF7801                              |
| R1            |     1 | 0.020 Ω , 1%, 1/2W resistor Dale WSL-2010-R020F or IRC LR2010-01-R020F                             |
| R2            |     1 | 218k Ω , 1% resistor                                                                               |
| R3            |     1 | 24.9k Ω , 1% resistor                                                                              |
| R4            |     1 | 100k Ω , 1% resistor                                                                               |
| U1            |     1 | MAX668EUB                                                                                          |
| JU1, JU2      |     2 | 3-pin headers                                                                                      |
| JU3           |     1 | 2-pin header                                                                                       |
| None          |     2 | Shunts (JU1, JU2)                                                                                  |
| None          |     1 | MAX668/MAX669 PC board                                                                             |
| None          |     1 | MAX668/MAX669 data sheet                                                                           |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products 1

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800. For small orders, phone 408-737-7600 ext. 3468.

## MAX668 Evaluation Kit

## Component Suppliers

| SUPPLIER                | PHONE        | FAX          |
|-------------------------|--------------|--------------|
| AVX                     | 803-946-0690 | 803-626-3123 |
| CoilCraft               | 708-639-6400 | 708-639-1469 |
| Coiltronics             | 561-241-7876 | 561-241-9339 |
| Dale-Vishay             | 402-564-3131 | 402-563-6418 |
| Fairchild               | 408-721-2181 | 408-721-1635 |
| Hitachi                 | 888-777-0384 | 650-244-7947 |
| International Rectifier | 310-322-3331 | 310-322-3332 |
| IRC                     | 512-992-7900 | 512-992-3377 |
| Motorola                | 602-303-5454 | 602-994-6430 |
| Siliconix               | 408-988-8000 | 408-970-3950 |
| Sprague                 | 603-224-1961 | 603-224-1430 |
| Sumida                  | 708-956-0666 | 708-956-0702 |
| Vishay/Vitramon         | 203-268-6261 | 203-452-5670 |

Note: Please indicate that you are using the MAX668 when contacting these component suppliers.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

The MAX668 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Place the shunt on JU1 across pins 1 and 2. Verify that  the  shunt  is  across  JU2  pins  2  and  3  (VCC is tied to VIN) and JU3 is open (LDO is open).
- 2) Connect a +5V supply to the VIN pad. Connect ground to the GND pad.
- 3) Connect a voltmeter to the VOUT pad.
- 4) Turn on the power supply and verify that the output voltage is 12V.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

The MAX668 EV kit provides a regulated +12V output voltage from an input source as low as +3V. It drives loads up to 1A with greater than 90% conversion efficiency. This EV kit is shipped configured in the nonbootstrapped mode (VCC is tied to VIN). However, there are several methods of connecting VCC and LDO depending on the specific design including input and output voltage range, quiescent power dissipation, MOSFET selection, and load.

If  the  minimum input voltage is below +3.0V, use the MAX669 with VCC bootstrapped from VOUT (Table 1). In bootstrapped mode, if VOUT is always less than +5.5V, then LDO may be shorted to VCC to eliminate the dropout voltage of the LDO regulator. This increases the gate drive to the MOSFET, which lowers the  MOSFET on-resistance but increases the MAX668 supply current due to gate-charge loss.

If VIN is greater than +3.0V, the MAX668's VCC can be powered from VIN. This will decrease quiescent power dissipation, especially when VOUT is large. If VIN is always less than +5.5V, LDO may be shorted to VCC to eliminate the dropout voltage of the LDO regulator. If VIN is in the range of +3V to +4.5V, then the user may still want to bootstrap from VOUT to increase gate drive to the MOSFET at the expense of power dissipation. If VIN is always greater than +4.5V, the VCC input should always be tied to VIN, since bootstrapping from VOUT will not increase the gate drive from LDO, but quiescent power dissipation will rise. Jumpers JU2 and JU3 control  the  VCC and LDO inputs (see MAX668/MAX669 data sheet).

## Jumper Selection

The 3-pin header JU1 selects shutdown mode. Table 1 lists  the  selectable  jumper  options.  The  3-pin  header JU2 selects bootstrapped mode. Table 2 lists the selectable jumper options. For VCC less than 5.5V, use the 2-pin header JU3 to short LDO to VCC. This eliminates the internal linear regulator (LDO) dropout voltage. For the MAX668, this allows operation with input voltages down to 2.7V. Table 3 lists the selectable jumper options.

## Other Output Voltages

The MAX668 EV kit can also be used to evaluate other output voltages. Refer to the Output Voltage Selection section in the MAX668 data sheet for instructions on selecting the feedback resistors R2 and R3. For output voltages greater than 15V, replace C5 (20V) with a capacitor that has a higher voltage rating.

In addition to the standard EV kit configuration of 3VIN to  12VOUT at  1A,  the EV  Kit  Application  Circuit Capabilities table  listed  several  common Input/Output combinations. Table 4 lists the components recommended for these alternative circuits.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Table 1.  Jumper JU1 Functions

| SHUNT LOCATION   | SYNC/ SHDN PIN    | MAX668 OUTPUT                                                             |
|------------------|-------------------|---------------------------------------------------------------------------|
| 1 and 2          | Connected to V CC | MAX668 enabled, V OUT = 12V. MAX668 operates at internal frequency.       |
| 2 and 3          | Connected to GND  | Shutdown mode, V OUT = V IN - diode                                       |
| Not installed    | Floating          | MAX668 can be externally synchronized when the SYNC/ SHDN pad is clocked. |

## Table 2.  Jumper JU2 Functions

| SHUNT LOCATION   | V CC PIN           | MAX668 MODE           |
|------------------|--------------------|-----------------------|
| 1 and 2          | Connected to V OUT | Bootstrapped mode     |
| 2 and 3          | Connected to V IN  | Non-bootstrapped mode |

## Table 3.  Jumper JU3 Functions

| SHUNT LOCATION   | LDO PIN           |
|------------------|-------------------|
| On               | Connected to V CC |
| Off              | Open              |

## MAX668 Evaluation Kit

Table 4.  Components for Alternate Application Circuits

|   VIN (MIN) (V) |   VOUT (V) |   IOUT (A) | MAXIM PART NO.   | JU2 BOOT- STRAPPED vs. NON-BOOT- STRAPPED   | L1 (µH)                   | R1 (m Ω )                 |   R2 (k Ω ) |   R3 (k Ω ) |   R4 (k Ω ) | D1                              | N1                              | C1                                       | C5                                    | C6                             |
|-----------------|------------|------------|------------------|---------------------------------------------|---------------------------|---------------------------|-------------|-------------|-------------|---------------------------------|---------------------------------|------------------------------------------|---------------------------------------|--------------------------------|
|             1.8 |         12 |        0.4 | MAX669           | 1 & 2 Bootstrapped                          | 4.7 Sumida CDRH10 4-4R7   | 20 Dale WSL- 2010- R020F  |         218 |        24.9 |         100 | Hitachi HRF302A                 | International Rectifier IRF7401 | 68µF 20V AVX TPSE686M 020R0150           | 120µF 20V Sprague 594D127X 0020R2T    | Open                           |
|             1.8 |         24 |        0.1 | MAX669           | 1 & 2 Bootstrapped                          | 1.0 Coilcraft D03316- 102 | 15 Dale WSL- 2010- R015F  |         454 |        24.9 |         200 | Hitachi HRF302A                 | International Rectifier IRF7401 | 68µF 20V AVX TPSE686M 020R0150           | 22µF 35V AVX TPSE226M 035R0300        | 22µF 35V AVX TPSE226M 035R0300 |
|             2.5 |         12 |       0.65 | MAX669           | 1 & 2 Bootstrapped                          | 4.7 Sumida CDRH10 4-4R7   | 20 Dale WSL- 2010- R020F  |         218 |        24.9 |         100 | Hitachi HRF302A                 | International Rectifier IRF7401 | 68µF 20V AVX TPSE686M 020R0150           | 120µF 20V Sprague 594D127X 0020R2T    | Open                           |
|               3 |          5 |          3 | MAX668           | 1 & 2 Bootstrapped                          | 4.7 Sumida CDRH12 7-4R7   | 15 Dale WSL- 2512- R015F  |          75 |        24.9 |         100 | Hitachi HRF502A                 | Fairchild FDS6680               | 330µF 10V Kemet T510X337 M010            | 330µF 10V Kemet T510X337 M010         | 330µF 10V Kemet T510X337 M010  |
|               3 |         36 |      0.020 | MAX668           | 2 & 3 Non- Bootstrapped                     | 4.7 Sumida CD43- 4R7      | 100 Dale WSL- 1206- R100F |         398 |        24.9 |         100 | Central Semi- conductor CMPD914 | Fairchild FDS5610               | 10µF 6.3V,X7R Taiyo Yuden JMK325BJ1 06MN | 2.2µF 50V, X7R Kemet C1825C22 5MR0RAC | Open                           |
|              12 |         24 |        0.5 | MAX668           | 2 & 3 Non- Bootstrapped                     | 22 Sumida CD73- 220       | 50 Dale WSL- 2010- R050F  |         453 |        24.9 |         100 | Motorola MBRS140T3              | Fairchild FDS6680               | 33µF 20V AVX TPSD336M 020R0200           | 22µF 35V AVX TPSE226M 035R0300        | Open                           |

Note: This table lists components recommended for building other application circuits using the MAX668 EV kit.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 1.  MAX668 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX668 Evaluation Kit

<!-- image -->

Figure 2.  MAX668 EV Kit Component Placement GuideComponent Side

Figure 3.  MAX668 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4.  MAX668 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time. Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

- 6 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 6 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600
- © 1998 Maxim Integrated Products © 1998 Maxim Integrated Products