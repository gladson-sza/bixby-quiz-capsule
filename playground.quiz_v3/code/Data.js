const QUESTIONS = [
    {
        "id": 810,
        "question": "Depois de trabalhar com uma imagem, como você a envia para o Docker Hub?",
        "description": null,
        "answers": {
            "answer_a": "$ docker push <nome de usuário nome da imagem>",
            "answer_b": "$ docker push <nome de usuário/nome da imagem>",
            "answer_c": "$ docker --push <nome de usuário nome da imagem>",
            "answer_d": null,
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "true",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_a",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "Docker"
            }
        ],
        "category": "Docker",
        "difficulty": "Médio"
    },
    {
        "id": 1023,
        "question": "O que a instrução FROM faz em um Dockerfile?",
        "description": null,
        "answers": {
            "answer_a": "FROM cria uma camada a partir de uma imagem base do Docker.",
            "answer_b": "FROM especifica o criador da imagem",
            "answer_c": "FROM é uma instrução inválida",
            "answer_d": "FROM adiciona arquivos do diretório atual do cliente Docker",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "true",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_a",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "Docker"
            }
        ],
        "category": "Docker",
        "difficulty": "Fácil"
    },
    {
        "id": 382,
        "question": "O comando UNION é usado para combinar conjuntos de resultados de mais de uma consulta em um único conjunto de resultados",
        "description": null,
        "answers": {
            "answer_a": "true",
            "answer_b": "false",
            "answer_c": null,
            "answer_d": null,
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "true",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_a",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "MySQL"
            }
        ],
        "category": "SQL",
        "difficulty": "Médio"
    },
    {
        "id": 630,
        "question": "Qual é o uso da função 'imagetypes()'?",
        "description": null,
        "answers": {
            "answer_a": "imagetypes() fornece o tamanho da imagem e os tipos suportados pela versão atual do GH-PHP.",
            "answer_b": "imagetypes() fornece o formato da imagem e os tipos suportados pela versão atual do GD-PHP.",
            "answer_c": "imagetypes() não é uma função real",
            "answer_d": "imagetypes() não é usada desde o PHP4 e não é suportada.",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "true",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_a",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "PHP"
            }
        ],
        "category": "Código",
        "difficulty": "Médio"
    },
    {
        "id": 328,
        "question": "Quais das seguintes afirmações são verdadeiras?",
        "description": null,
        "answers": {
            "answer_a": "Os nomes de bancos de dados, tabelas e colunas podem ter até 64 caracteres de comprimento",
            "answer_b": "Os nomes de alias podem ter até 255 caracteres de comprimento",
            "answer_c": "Os nomes de bancos de dados, tabelas e colunas podem ter até 256 caracteres de comprimento",
            "answer_d": "Os nomes de alias podem ter até 64 caracteres de comprimento",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "true",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_a",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "MySQL"
            }
        ],
        "category": "SQL",
        "difficulty": "Difícil"
    },
    {
        "id": 880,
        "question": "Quais são as áreas de aplicação notáveis para o Docker?",
        "description": null,
        "answers": {
            "answer_a": "Simplificar a configuração, gerenciamento de pipelines de código, capacidades de depuração e implantação rápida.",
            "answer_b": "Robusto, Transparência, ilustrador de código e implantação lenta",
            "answer_c": null,
            "answer_d": null,
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "true",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_a",
        "explanation": null,
        "tip": null,
        "tags": [
           

 {
                "name": "Docker"
            }
        ],
        "category": "Docker",
        "difficulty": "Médio"
    },
    {
        "id": 988,
        "question": "Como você arredonda o número 7.25 para o inteiro mais próximo?",
        "description": null,
        "answers": {
            "answer_a": "Math.round(7.25)",
            "answer_b": "round(7.25)",
            "answer_c": "rnd(7.25)",
            "answer_d": "Math.rnd(7.25)",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "true",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_a",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "JavaScript"
            }
        ],
        "category": "Código",
        "difficulty": "Fácil"
    },
    {
        "id": 48,
        "question": "Qual das respostas listadas abaixo se refere a um comando usado para invocar um editor de texto em sistemas operacionais semelhantes ao Unix?",
        "description": null,
        "answers": {
            "answer_a": "edit",
            "answer_b": "notepad",
            "answer_c": "vi",
            "answer_d": "bcdedit",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "false",
            "answer_c_correct": "true",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_c",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "Linux"
            }
        ],
        "category": "Linux",
        "difficulty": "Fácil"
    },
    {
        "id": 904,
        "question": "Kube-apiserver no mestre do Kubernetes é projetado para escalar.",
        "description": null,
        "answers": {
            "answer_a": "Verticalmente",
            "answer_b": "Horizontalmente",
            "answer_c": null,
            "answer_d": null,
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "true",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": null,
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "Kubernetes"
            }
        ],
        "category": "DevOps",
        "difficulty": "Fácil"
    },
    {
        "id": 278,
        "question": "Qual das seguintes é uma função do WordPress usada para executar uma consulta ao banco de dados?",
        "description": null,
        "answers": {
            "answer_a": "<?php $wpdb->run_query('query'); ?>",
            "answer_b": "<?php $wpdb->fetch('query'); ?>",
            "answer_c": "<?php $wpdb->mysql_query('query'); ?>",
            "answer_d": "<?php $wpdb->query('query'); ?>",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "true",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_a",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "WordPress"
            }
        ],
        "category": "CMS",
        "difficulty": "Fácil"
    },
    {
        "id": 703,
        "question": "Como você lista apenas os diretórios no diretório atual usando o comando ls?",
        "description": null,
        "answers": {
            "answer_a": "ls -l|grep “^d”",
            "answer_b": "ls -ld",
            "answer_c": "ls --dir",
            "answer_d": "ls -d",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "true",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": null,
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "BASH"
            },
            {
                "name": "Linux"
            }
        ],
        "category": "Linux",
        "difficulty": "Médio"
    },
    {
        "id": 570,
        "question": "O que PHP significa?",
        "description": null,
        "answers": {
            "answer_a": "Processador de hipertexto PHP",
            "answer_b": "Pré-processador de hipertexto PHP",
            "answer_c": "Pré-processador de marcação hiperfônica PHP",
            "answer_d": "Processador de marcação hiperfônica PHP",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "true",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "true",
            "answer_c_correct": "true",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_a",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "PHP"
            }
        ],
        "category": "Código",
        "difficulty": "Médio"
    },
    {
        "id": 873,
        "question": "Uma imagem Docker fornece um modelo para um contêiner com todos os arquivos necessários de uma aplicação, mas não tem instruções para executá-la.",
        "description": null,
        "answers": {
            "answer_a": "true",
            "answer_b": "false",
            "answer_c": null,
            "answer_d": null,
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "true",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": null,
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "Docker"
            }
        ],
        "category": "Docker",
        "difficulty": "Médio"
    },
    {
        "id": 980,
        "question": "Como você chama uma função chamada \"minhaFuncao\"?",
        "description": null,
        "answers": {
            "answer_a": "minhaFuncao()",
            "answer_b": "chamar minhaFuncao()",
            "answer_c": "chamar função minhaFuncao()",
            "answer_d": null,
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "true",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_a",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "JavaScript"
            }
        ],
        "category": "Código",
        "difficulty": "Fácil"
    },
    {
        "id": 986,
        "question": "Como inserir um comentário que tenha mais de uma linha?",
        "description": null,
        "answers": {
            "answer_a": "/*Este comentário tem mais de uma linha*/",
            "answer_b": "<!--Este comentário tem mais de uma linha-->",
            "answer_c": "//Este comentário tem mais de uma linha//",
            "answer_d": null,
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "true",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_a",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "JavaScript"
            }
        ],
        "category": "Código",
        "difficulty": "Fácil"
    },
    {
        "id": 25,
        "question": "Quais são os gerenciadores de boot Linux mais comuns?",
        "description": null,
        "answers": {
            "answer_a": "Gerenciador de Boot/Flag de Boot",
            "answer_b": "Gerenciador de Inicialização/MBR",
            "answer_c": "LILO/GRUB",
            "answer_d": "Bootd/init.d",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "false",
            "answer_c_correct": "true",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_c",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "Linux"
            }
        ],
        "category": "Linux",
        "difficulty": "Difícil"
    },
    {
        "id": 854,
        "question": "Como salvar uma nova imagem docker com o ID do contêiner mencionado no comando no sistema local.",
        "description": null,
        "answers": {
            "answer_a": "$ docker save 109ca6efc quizapi/httpd_image",
            "answer_b": "$ docker --save 109ca6efc quizapi/httpd_image",
            "answer_c": "$ docker commit 109ca6efc quizapi/httpd_image",
            "answer_d": null,
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "false",
            "answer_c_correct": "true",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": null,
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "Docker"
            }
        ],
        "category": "Docker",
        "difficulty": "Fácil"
    },
    {
        "id": 61,
        "question": "Todas as variáveis em PHP começam com qual símbolo?",
        "description": null,
        "answers": {
            "answer_a": "&",
            "answer_b": "!",
            "answer_c": "#",
            "answer_d": "$",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "true",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_d",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "PHP"
            }
        ],
        "category": "",
        "difficulty": "Fácil"
    },
    {
        "id": 600,
        "question": "O que significa acessar uma classe via ::?",
        "description": null,
        "answers": {
            "answer_a": ":: é usado para acessar métodos estáticos que não requerem inicialização de objeto.",
            "answer_b": ":: é usado para acessar métodos estáticos que requerem inicialização de objeto.",
            "answer_c": null,
            "answer_d": null,
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "true",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct":

 "false"
        },
        "correct_answer": "answer_a",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "PHP"
            }
        ],
        "category": "Código",
        "difficulty": "Médio"
    },
    {
        "id": 900,
        "question": "Qual comando é usado para mover um arquivo em sistemas Unix/Linux?",
        "description": null,
        "answers": {
            "answer_a": "mv",
            "answer_b": "move",
            "answer_c": "cp",
            "answer_d": "xmove",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "true",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": null,
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "Linux"
            }
        ],
        "category": "Linux",
        "difficulty": "Fácil"
    },
    {
        "id": 251,
        "question": "Qual das seguintes opções irá redefinir a senha do MySQL para um usuário específico?",
        "description": null,
        "answers": {
            "answer_a": "UPDATE mysql.user SET Password=’senha’ WHERE User=’nome_de_usuário’;",
            "answer_b": "UPDATE mysql.user SET Password=PASSWORD(‘senha’) WHERE User=’nome_de_usuário’;",
            "answer_c": "UPDATE mysql.user SET Password=RESET(‘senha’) WHERE User=’nome_de_usuário’;",
            "answer_d": "Nenhuma das opções acima",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "true",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_a",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "MySQL"
            }
        ],
        "category": "SQL",
        "difficulty": "Médio"
    },
    {
        "id": 808,
        "question": "Você usa um contêiner, edita-o e o atualiza",
        "description": null,
        "answers": {
            "answer_a": "true",
            "answer_b": "false",
            "answer_c": null,
            "answer_d": null,
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "true",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_a",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "Docker"
            }
        ],
        "category": "Docker",
        "difficulty": "Médio"
    },
    {
        "id": 136,
        "question": "Como você pode fazer uma lista com marcadores?",
        "description": null,
        "answers": {
            "answer_a": "<ol>",
            "answer_b": "<dl>",
            "answer_c": "<ul>",
            "answer_d": "<lista>",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "false",
            "answer_c_correct": "true",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_c",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "HTML"
            }
        ],
        "category": "",
        "difficulty": "Fácil"
    },
    {
        "id": 781,
        "question": "Quando o comando switch é utilizado:",
        "description": null,
        "answers": {
            "answer_a": "O comando switch é utilizado para evitar longos blocos de código if..elseif..else.",
            "answer_b": "O comando switch é utilizado para evitar longos blocos de loops como do...while.",
            "answer_c": "O comando switch é utilizado quando os comandos como if..elseif..else não funcionam.",
            "answer_d": null,
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "true",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": null,
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "PHP"
            }
        ],
        "category": "Código",
        "difficulty": "Médio"
    },
    {
        "id": 392,
        "question": "Qual entre os seguintes tem o maior número de bytes disponíveis?",
        "description": null,
        "answers": {
            "answer_a": "Varchar",
            "answer_b": "Tipo de texto",
            "answer_c": "Ambos Varchar e Char",
            "answer_d": "Char",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "true",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_a",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "MySQL"
            }
        ],
        "category": "SQL",
        "difficulty": "Fácil"
    },
    {
        "id": 904,
        "question": "O kube-apiserver no mestre do Kubernetes é projetado para escalonar.",
        "description": null,
        "answers": {
            "answer_a": "Verticalmente",
            "answer_b": "Horizontalmente",
            "answer_c": null,
            "answer_d": null,
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "true",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": null,
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "Kubernetes"
            }
        ],
        "category": "DevOps",
        "difficulty": "Fácil"
    },
    {
        "id": 868,
        "question": "Você não pode criar vários contêineres a partir da mesma imagem",
        "description": null,
        "answers": {
            "answer_a": "Verdadeiro",
            "answer_b": "Falso",
            "answer_c": null,
            "answer_d": null,
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "true",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": null,
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "Docker"
            }
        ],
        "category": "Docker",
        "difficulty": "Médio"
    },
    {
        "id": 617,
        "question": "Como podemos verificar se o valor de uma variável é alfanumérico?",
        "description": null,
        "answers": {
            "answer_a": "gtype_alnum para verificar se é um valor alfanumérico ou não.",
            "answer_b": "ctype_alnum para verificar se é um valor alfanumérico ou não.",
            "answer_c": "dtype_alnum para verificar se é um valor alfanumérico ou não.",
            "answer_d": null,
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "true",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_a",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "PHP"
            }
        ],
        "category": "Código",
        "difficulty": "Fácil"
    },
    {
        "id": 712,
        "question": "Explique o uso do bit de permissão SUID em um arquivo.",
        "description": null,
        "answers": {
            "answer_a": "Ele dá ao processo os privilégios do proprietário do arquivo durante a instância do programa.",
            "answer_b": "Ele dá ao processo os privilégios do usuário root durante a instância do programa.",
            "answer_c": "Ele nega ao processo os privilégios do proprietário do arquivo durante a instância do programa.",
            "answer_d": "Ele nega ao processo os privilégios do usuário root durante a instância do programa.",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "true",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": null,
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "Linux"
            }
        ],
        "category": "Linux",
        "difficulty": "Médio"
    },
    {
        "id": 453,
        "question": "Um arquivo de texto simples que informa ao navegador o que armazenar em cache é conhecido como:",
        "description": null,
        "answers": {
            "answer_a": "Arquivos de entrada",
            "answer_b": "Arquivo HTML",
            "answer_c": "Um arquivo de manifesto",
            "answer_d": "Arquivos de saída",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "true",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_a",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "HTML"
            }
        ],
        "category": "Código",
        "difficulty": "Médio"
    },
    {
        "id": 297,
        "question": "Em qual linguagem de programação o WordPress é escrito?",
        "description": null,
        "answers": {
            "answer_a": "Java",
            "answer_b": "Node",
            "answer_c": "PHP",
            "answer_d": "Javascript",
            "answer_e": "VueJS",
            "answer_f": "Python"
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "false",
            "answer_c_correct": "true",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_a",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "WordPress"
            }
        ],
        "category": "CMS",
        "difficulty": "Fácil"
    },
    {
        "id": 620,
        "question": "Qual é a diferença entre mysqli_fetch_object() e mysqli_fetch_array()?",
        "description": null,
        "answers": {
            "answer_a": "A função mysqli_fetch_object() coleta o primeiro registro correspondente único, enquanto mysqli_fetch_array() coleta todos os registros correspondentes da tabela em uma matriz.",
            "answer_b": "A função mysqli_fetch_object() coleta todos os registros correspondentes da tabela em uma matriz, enquanto mysqli_fetch_array() coleta o primeiro registro correspondente único.",
            "answer_c": null,
            "answer_d": null,
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "true",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_a",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "PHP"
            }
        ],
        "category": "Código",
        "difficulty": "Fácil"
    },
    {
        "id": 1114,
        "question": "Qual tipo de dado é usado para armazenar uma sequência de caracteres em Python?",
        "description": null,
        "answers": {
            "answer_a": "Inteiro",
            "answer_b": "Flutuante",
            "answer_c": "String",
            "answer_d": "Booleano",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "false",
            "answer_c_correct": "true",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_a",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "Python"
            }
        ],
        "category": "Não categorizado",
        "difficulty": "Fácil"
    },
    {
        "id": 74,
        "question": "Qual é uma maneira correta de adicionar um comentário em PHP?",
        "description": null,
        "answers": {
            "answer_a": "*\\...\\*",
            "answer_b": "/*...*/",
            "answer_c": "<!--...-->",
            "answer_d": "<comment>...</comment>",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "true",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_b",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "PHP"
            }
        ],
        "category": "",
        "difficulty": "Fácil"
    },
    {
        "id": 994,
        "question": "Como você declara uma variável JavaScript?",
        "description": null,
        "answers": {
            "answer_a": "v carName;",
            "answer_b": "variável carName;",
            "answer_c": "var carName;",
            "answer_d": null,
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "false",
            "answer_c_correct": "true",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_a",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "JavaScript"
            }
        ],
        "category": "Código",
        "difficulty": "Fácil"
    },
    {
        "id": 411,
        "question": "Qual das seguintes funções é uma função de agregação no MySQL?",
        "description": null,
        "answers": {
            "answer_a": "LIKE",
            "answer_b": "MAX",
            "answer_c": "Group By",
            "answer_d": "União",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "true",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_a",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "MySQL"
            }
        ],
        "category": "SQL",
        "difficulty": "Médio"
    },
    {
        "id": 470,
        "question": "Qual dos seguintes elementos marca O Componente De Texto Ruby De Uma Anotação Ruby?",
        "description": null,
        "answers": {
            "answer_a": "Rubytxt",
            "answer_b": "Rt",
            "answer_c": "Ruby",
            "answer_d": "R",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "true",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_a",
        "explanation": null,
        "tip": null,
        "tags": [],
        "category": "Código",
        "difficulty": "Médio"
    },
    {
        "id": 748,
        "question": "O servidor de API também é conhecido como:",
        "description": null,
        "answers": {
            "answer_a": "kubeapi",
            "answer_b": "kube-server",
            "answer_c": "k8s-apiserver",
            "answer_d": "kube-apiserver",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "true",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_a",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "Kubernetes"
            }
        ],
        "category": "Linux",
        "difficulty": "Fácil"
    },
    {
        "id": 319,
        "question": "O que o papel de Contribuidor pode fazer?",
        "description": null,
        "answers": {
            "answer_a": "Publicar Posts",
            "answer_b": "Editar Páginas",
            "answer_c": "Editar Posts",
            "answer_d": "Moderar Comentários",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "true",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_a",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "WordPress"
            }
        ],
        "category": "CMS",
        "difficulty": "Fácil"
    },
    {
        "id": 357,
        "question": "Qual dos seguintes scripts será executado com sucesso",
        "description": null,
        "answers": {
            "answer_a": "Estatísticas de usuários SELECT nome do cliente FROM clientes;",
            "answer_b": "SELECT `nome do cliente` FROM clientes WHERE cat_id = 12 ORDER BY cat_id;",
            "answer_c": "SELECIONE DE `clientes` 'nome do cliente';",
            "answer_d": "SELECT `nome do cliente` FROM clientes ORDER BY zona ONDE cat_id = 12;",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "true",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_b",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "SQL"
            }
        ],
        "category": "Código",
        "difficulty": "Médio"
    },
    {
        "id": 567,
        "question": "Qual dos seguintes é o método HTTP padrão para uma solicitação de leitura?",
        "description": null,
        "answers": {
            "answer_a": "GET",
            "answer_b": "LEITURA",
            "answer_c": "READ",
            "answer_d": "VIEW",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "true",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_a",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "HTTP"
            }
        ],
        "category": "Protocolos",
        "difficulty": "Médio"
    },
    {
        "id": 1026,
        "question": "Qual destes é um framework de desenvolvimento JavaScript?",
        "description": null,
        "answers": {
            "answer_a": "AngularJS",
            "answer_b": "JQuery",
            "answer_c": "NodeJS",
            "answer_d": "Laravel",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "true",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_a",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "JavaScript"
            }
        ],
        "category": "Web",
        "difficulty": "Fácil"
    },
    {
        "id": 1128,
        "question": "Que comando Docker é usado para remover um contêiner?",
        "description": null,
        "answers": {
            "answer_a": "docker kill",
            "answer_b": "docker rm",
            "answer_c": "docker rmi",
            "answer_d": "docker stop",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "true",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_b",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "Docker"
            }
        ],
        "category": "Docker",
        "difficulty": "Fácil"
    }
];


export default QUESTIONS