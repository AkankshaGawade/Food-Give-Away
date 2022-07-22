<?php include('includes/header.php');?>
<?php sesssio_start();?>

<div class="container">
    <div class="row">
        <div class="col-md-12">
            <?php
            if(isset($_SESSION('status']) && $_SESSION['status']!="")
            {
                ?>
                <div class="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>Hey!</strong> <?php echo $_SESSION['status'];?>
                    <button type="button" class="close" data-dismiss="alert" arla-lable="close">
                        <span arla-hidden="true">$times;</span>
            </button>
            </div>
            <?php
             $inset($_SESSION["status"]);
            }
            ?>
        </div>
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">

                </div>
            </div>
        </div>



        </div>
    </div>

    <?php include('include/footer.php');?>
